const LINK = ':scope a[role="link"],:scope div[role="button"],:scope [aria-label="Sponsored"]';

/**
 *  Determine if a FB feed post is sponsored.
 *  Single <a> element sponsored string:
 *  <a ...>Sponsored</a>
 *
 *  @param {HTMLElement} element - A facebook post element.
 *  @param {String} sponsorStr - Sponsored string to scan for. (Defaults to 'Sponsored').
 *  @returns {Boolean} true if the post subtitle contains a visible sponsored substring.
 */

// Since Facebook, by FTC law, must have an aria label with the word "Sponsored",
// our strategy is to find all elements with a aria-labelledby attr, then lookup
// the corresponding aria label for the word Sponsored.
//
// This is also not computationally expensive, since on the test post element
// I used, I found only 3 aria-labelledby elements that we need to go through.
const isSponsoredPost = function(el, sponsorStr = 'Sponsored') {
  var result = isSponsoredTest1(el, sponsorStr) || isSponsoredTest2(el, sponsorStr);
  result = result || isSponsoredTest3(el, sponsorStr);
  // Because FB breaks the isSponsoredPost code often, I'm leaving this
  // console.log in to help future debugging.
  // console.debug('>> isSponsoredPost', el, result);
  return result;
};

// First we try to detect sponsored post by searching for aria labels with
// Sponsored label.
function isSponsoredTest1(element, sponsorStr = 'Sponsored') {
  const labelledElems = element.querySelectorAll('[aria-labelledby]');
  for (const labelledElem of labelledElems) {
    // Facebook creates ghost divs with a fake Sponsored aria label. We can
    // counter this by checking the span/div has a valid width.
    if (labelledElem.clientWidth === 0) {
      continue;
    }

    const label = labelledElem.getAttribute('aria-labelledby');
    const ariaLabelElem = document.querySelector('#' + label);
    if (ariaLabelElem && ariaLabelElem.textContent === sponsorStr) {
      return true;
    }
  }

  return false;
}

// Then we try the usual way of finding Sponsor text in the FB Post itself.
function isSponsoredTest2(element, sponsorStr = 'Sponsored') {
  return Boolean(
    Array.from(element.querySelectorAll(LINK)).find(link => {
      return (
        link.innerText === sponsorStr || // ordinary ads
        link.innerText.indexOf(sponsorStr) === 0 || // political ads that say, e.g. Sponsored • Paid for by Whoever
        link.getAttribute('aria-label') === sponsorStr // obfuscated ads that say, e.g. tiSSpponeonssetormoreidealagd but have a nearby div with aria-label="Sponsored"
      );
    })
  );
}

// Whether el2 contains el1.
function contains(el1, el2) {
  var rect1 = el1.getBoundingClientRect();
  var rect2 = el2.getBoundingClientRect();

  return (
    rect2.top <= rect1.top &&
    rect1.top <= rect2.bottom &&
    rect2.top <= rect1.bottom &&
    rect1.bottom <= rect2.bottom &&
    rect2.left <= rect1.left &&
    rect1.left <= rect2.right &&
    rect2.left <= rect1.right &&
    rect1.right <= rect2.right
  );
}

// Then we try the usual way of finding Sponsor text in the FB Post itself.
function isSponsoredTest3(element, sponsorStr = 'Sponsored') {
  const els = element.querySelectorAll(LINK);
  for (const el of els) {
    // Try to bypass obfuscated elements by only taking the spans that are
    // within the original element.
    var fullstring = '';
    var spans = el.querySelectorAll('span');
    for (const span of spans) {
      if (span.firstChild && contains(span, el)) {
        var add = span.firstChild.nodeValue;
        if (add === null) {
          continue;
        }
        fullstring += add;
      }
    }
    if (fullstring === sponsorStr) {
      return true;
    }
  }
  return false;
}

export default isSponsoredPost;
