const LINK = ':scope a[role="link"],:scope div[role="button"],:scope div[aria-label="Sponsored"]';

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
  return isSponsoredTest1(el, sponsorStr) || isSponsoredTest2(el, sponsorStr);
};

// First we try to detect sponsored post by searching for aria labels with
// Sponsored label.
function isSponsoredTest1(element, sponsorStr = 'Sponsored') {
  const arias = element.querySelectorAll('[aria-labelledby]');
  for (const a of arias) {
    // Facebook creates ghost divs with a fake Sponsored aria label. We can
    // counter this by checking the span/div has a valid width.
    if (a.clientWidth <= 3) {
      continue;
    }

    const label = a.getAttribute('aria-labelledby');
    const ariaElement = document.querySelector('#' + label);
    if (ariaElement && ariaElement.textContent === sponsorStr) {
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

export default isSponsoredPost;
