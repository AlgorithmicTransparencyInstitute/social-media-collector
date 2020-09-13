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

// TODO: in some cases, I suspect, FB may switch to having obfuscated sponsor labels that
//       actually manage to say "Sponsored" to a screenreader by using the aria-labelledby
//       attribute, pointing to an element elsewhere in the DOM tree (not in the ad element)
//       that contains the unobfuscated text "Sponsored." So, we should account for that
//       somehow, perhaps by finding all elements with a labelledby attr, seeing if they
//       point to something that says "Sponsored" and, if so, considering anything that
//       is labeled by that element to be an ad.
const isSponsoredPost = (element, sponsorStr = 'Sponsored') =>
  Boolean(
    Array.from(element.querySelectorAll(LINK)).find(link => {
      return (
        link.innerText === sponsorStr || // ordinary ads
        link.innerText.indexOf(sponsorStr) === 0 || // political ads that say, e.g. Sponsored • Paid for by Whoever
        link.getAttribute('aria-label') === sponsorStr // obfuscated ads that say, e.g. tiSSpponeonssetormoreidealagd but have a nearby div with aria-label="Sponsored"
      );
    })
  );

export default isSponsoredPost;
