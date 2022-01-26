// Purpose: The content script injects this file into the Youtube video, to send
// data from youtube page to content script.

const PATHS = [
  '/get_midroll_info?',
  '/watch?v=',
  '/youtubei/v1/player/ad_break?',
  '/youtubei/v1/player?'
];

const cleanAndParse = text => JSON.parse(text.replace('for (;;);', ''));

// the initial ads are sometimes baked into the HTML of the page, at variable ytInitialPlayerResponse.
// so we send that too!
setTimeout(() => {
  if (typeof ytInitialPlayerResponse !== 'undefined') {
    const data = {
      body: ytInitialPlayerResponse,
      url: window.location.href,
      hostUrl: window.location.href
    };
    console.debug(
      'sending ytInitialPlayerResponse data from youtube page to content script',
      data
    );
    window.postMessage(data, '*');
  }
}, 5000);

const loadHandler = function() {
  if (
    !this.__xData ||
    !this.__xData.url ||
    (this.responseType !== 'text' && this.responseType !== '') ||
    !this.responseText
  )
    return;

  PATHS.forEach(path => {
    if (!this.__xData.url.includes(path)) return;

    let body;
    try {
      body = cleanAndParse(this.responseText);
    } catch (er) {
      console.debug('could not parse', this.responseText);
      console.error(er);
    }
    if (body)
      setTimeout(() => {
        const data = {
          body,
          url: this.__xData.url,
          hostUrl: window.location.href
        };
        console.debug('sending data from youtube page to content script', data);
        window.postMessage(data, '*');
      }, 250); // gives the content script time to register a listener.
  });
};

console.debug('monkey patching XHR and fetch');

const { open, send } = XMLHttpRequest.prototype;

XMLHttpRequest.prototype.open = function(_method, url) {
  this.__xData = { url: url.toLowerCase() };
  return open.apply(this, arguments);
};

XMLHttpRequest.prototype.send = function(_postData) {
  this.onload = loadHandler;
  return send.apply(this, arguments);
};

// monkeypatching fetch() because YouTube (post March 2021 uses that for ads data.)
const fetchLoadHandler = function(response) {
  const body = null;
  PATHS.forEach(path => {
    if (!response.url.includes(path)) return;
    const clonedResponse = response.clone(); // clone the response object so that the original response object is still "unread" by future consumers of the promise.

    clonedResponse
      .json()
      .then(body => {
        setTimeout(() => {
          const data = {
            body,
            url: clonedResponse.url,
            hostUrl: window.location.href
          };
          console.debug('sending data from youtube page to content script', data);
          window.postMessage(data, '*');
        }, 250); // gives the content script time to register a listener.
      })
      .catch(er => {
        console.debug('could not parse', body);
        console.error(er);
      });
  });
};

const oldFetch = window.fetch;
window.fetch = function() {
  return Promise.resolve(
    oldFetch.apply(window, arguments).then(response => {
      fetchLoadHandler(response);
      return response;
    })
  );
};
