const LINK = ':scope a[role="link"],:scope div[role="button"]';

/**
 *  Determine if a FB feed post is sponsored.
 *  Single <a> element sponsored string:
 *  <a ...>Sponsored</a>
 *
 *  @param {HTMLElement} element - A facebook post element.
 *  @param {String} sponsorStr - Sponsored string to scan for. (Defaults to 'Sponsored').
 *  @returns {Boolean} true if the post subtitle contains a visible sponsored substring.
 */
const isSponsoredPost = (element, sponsorStr = 'Sponsored') =>
  Boolean(
    Array.from(element.querySelectorAll(LINK)).find(
      link => link.innerText === sponsorStr || link.innerText.indexOf(sponsorStr) === 0
    )
  );

export default isSponsoredPost;
