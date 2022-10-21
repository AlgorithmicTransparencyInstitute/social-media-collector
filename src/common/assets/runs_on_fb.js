// Purpose: The content script injects this file into the Facebook web page, to
// parse HTML elements, access JS variables that are only in scope on the web
// page, but not in scope of the content script.
//
// This file will look at each facebook feed item to send ads to the background
// service worker.

console.debug('Running Data Grab Script');

const isPrimitive = item => typeof item === 'string';
const isEmpty = item =>
  item === null ||
  item === undefined ||
  item === NaN ||
  item === '' ||
  (Array.isArray(item) && item.length === 0) ||
  (typeof item === 'object' && Object.keys(item).length === 0);

const CLIENT_TOKEN = 'client_token';
const AD_ID = 'ad_id';
const AD_CLIENT_TOKEN = 'adClientToken';
const ADID = 'adID';
const TITLE_WITH_ENTITIES = 'title_with_entities';

const INTERESTING = [CLIENT_TOKEN, AD_ID, AD_CLIENT_TOKEN, ADID, TITLE_WITH_ENTITIES];
const isInteresting = key => INTERESTING.includes(key);

// Keep track of ad data we got via GraphQL and the HTML.
// Index/key is the pagename found in the JSON object.
// Value is the ad_id and client_token
var adData = {};

// This is an old method of getting adId and clientToken.
// It gets the getid and clientToken by analyzing the DOM. This is no longer
// possible as of Oct 3, 2022.
function analyse(graph) {
  const stash = new Set();
  const undiscoveredObject = item => typeof item === 'object' && !stash.has(item);
  const found = {};

  const performAnalysis = obj => {
    if (isEmpty(obj)) return obj;
    const objectKeys = Object.keys(obj);
    for (let i = 0; i < objectKeys.length; i++) {
      const key = objectKeys[i];
      if (key === "return") continue; // the "return" key appears to be a reference to a parent element and, since this is recursive, it can mean "analyzing" an element's siblings, which we don't want (because it can lead to one ad's ad id being attached to a sibling ad.)
                                      // you get true from element[Object.keys(element)[0]]["child"]["return"] == element[Object.keys(element)[0]]
      const item = obj[key];
      if (isEmpty(item)) continue;
      if (item instanceof Date) continue;
      if (isPrimitive(item)) {
        if (isInteresting(key)) {
          found[key] = found[key] || [];
          found[key].push(item);
        }
        continue;
      }
      if (Array.isArray(item)) {
        item.forEach(performAnalysis);
        continue;
      }
      if (undiscoveredObject(item)) {
        stash.add(item);
        performAnalysis(item);
        continue;
      }
    }
  };

  performAnalysis(graph);

  const adId = Array.isArray(found.ad_id) ? found.ad_id[0] : undefined;
  const clientToken = Array.isArray(found.client_token) ? found.client_token[0] : undefined;

  return { adId, clientToken };
}

function getReactData(label) {
  var data = adData[label];
  if (!data) {
    console.error('no adData with label. Logging out label, adData', label, adData);
    return {};
  }

  return { type: 'reactData', label, data };
}

window.addEventListener('message', function(event) {
  if (event.source !== window) return true;
  switch (event.data.type) {
    case 'getReactData': {
      parseAdDataInHTML();
      const data = getReactData(event.data.label);
      if (JSON.stringify(data) === "{}") {
        console.log('guo event that has no label', event);
      }
      window.postMessage(data, '*');
      return true;
    }
    case 'getAsyncParams': {
      const data = {
        type: 'asyncParams',
        paramsPost: require('getAsyncParams')('POST'),
        paramsGet: require('getAsyncParams')('GET'),
        paramsPostSecond: require('getAsyncParams')('POST')
      };
      window.postMessage(data, '*');
      return true;
    }
    default: {
      return true;
    }
  }
});

// Parse the JSON string that comes after the ':' in this example: "a": "asdf"
function parseJsonStr(s_a) {
  var s_b = s_a.substring(s_a.indexOf(':') + 1);
  var s_c = s_b.substring(0, s_b.indexOf(','));
  var result = s_c.replace('"', '').replace('"', '');
  result = result.replace('}');
  return result;
}

// 'adStr' is a large JSON string returned from GraphQL. Can't do JSON.parse
// because it gets this strange error
// 'Unexpected non-whitespace character after JSON at position 27513'
function parseAdId(adStr) {
  var s = adStr;
  var s_a = s.substring(s.indexOf('ad_id'));
  var result = parseJsonStr(s_a);
  // var result = parseInt(s_c, 10); // Cannot parseInt, the ad_id is way more than 32 bits.
  result = result.replace(/\D/g, '');
  // console.log('Parsed out ad_id:', result);
  return result;
}

function parseClientToken(adStr) {
  var s = adStr;
  var s_a = s.substring(s.indexOf('client_token'));
  var result = parseJsonStr(s_a);
  result = JSON.parse('"'+result+'"'); // Parse Unicode escape sequence in client tokens.
  // console.log('Parsed out client_token:', result);
  return result;
}

function parsePageName(adStr) {
  var s = adStr;
  var s_a = s.substring(s.indexOf('ad_id'));
  var s_b = s_a.substring(s_a.indexOf('"name"'));
  var result = parseJsonStr(s_b);
  // console.log('Got page name:', result);
  return result;
}

// The data we need to send to GraphQL is this:
// {
//   "adId": "23851939402290713",
//   "fields": {
//     "ad_id": "23851939402290713",
//     "client_token": "AI@AQJSZf0sf2VX_wkJW1APNeFipp0AdiBWGcs-UB4n72YaqrSzVUNjwfhuacZWM2GIAyDRHRJhFHGqPQ34sr6KGn2m",
//     "request_id": "f2c495bd23f425_23851939402290713"
//   }
// }
//
// That means ad_id and client_token. The request_id is a combination of the adId and something else.
function collectAdData(adStr) {
  var adId = parseAdId(adStr);
  var clientToken = parseClientToken(adStr);
  var pagename = parsePageName(adStr);
  console.log('pagename, adId, clientToken', pagename, adId, clientToken);
  adData[pagename] = { adId, clientToken };
}

var collectedAdDataInHTML = false;
function parseAdDataInHTML() {
  var sjs = document.querySelectorAll('script[data-sjs]');
  for (let data of sjs) {
    if (data.innerHTML.indexOf('ad_id') >= 0) {
      collectAdData(data.innerHTML);
      collectedAdDataInHTML = true;
    }
  }
}

// Taken from: https://betterprogramming.pub/chrome-extension-intercepting-and-reading-the-body-of-http-requests-dd9ebdf2348b
function interceptData() {
  var xhrOverrideScript = document.createElement('script');
  xhrOverrideScript.type = 'text/javascript';
  xhrOverrideScript.innerHTML = `
  (function() {
    var XHR = XMLHttpRequest.prototype;
    var send = XHR.send;
    var open = XHR.open;
    XHR.open = function(method, url) {
      this.url = url; // the request url
      return open.apply(this, arguments);
    }
    XHR.send = function() {
      this.addEventListener('load', function() {
        if (this.url.includes('graphql')) {
          if (this.response.indexOf('ad_id') >= 0 && this.response.indexOf('client_token') >= 0) {
            // For some reason JSON.parse(this.response) doesn't work on really large
            // JSON strings (2.4 MB+), getting this strange error
            // 'Unexpected non-whitespace character after JSON at position 27513'
            // Instead, we'll try to parse out the string after ad_id.
            // console.log('full ad text', this.response);
            collectAdData(this.response);
          }
        }
      });
      return send.apply(this, arguments);
    };
  })();
  `
  document.head.prepend(xhrOverrideScript);
}

// Sets up the AJAX intercept.
function checkForDOM() {
  if (document.body && document.head) {
    // Parse the advertisement JSON already loaded on screen.
    parseAdDataInHTML();

    // Setup the AJAX intercept.
    interceptData();
  } else {
    requestIdleCallback(checkForDOM);
  }
}
requestIdleCallback(checkForDOM);
