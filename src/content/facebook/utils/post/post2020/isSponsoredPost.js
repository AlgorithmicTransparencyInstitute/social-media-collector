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
const isSponsoredPost = function(element, sponsorStr = 'Sponsored') {
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
};

export default isSponsoredPost;
