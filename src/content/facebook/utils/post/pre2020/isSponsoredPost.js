import getSubtitleElement from '../../subtitle/getSubtitleElement';
import getSubtitleSponsoredChildElements from '../../subtitle/getSubtitleSponsoredChildElements';
import isVisibleSubtitleSponsoredChildElement from '../../subtitle/isVisibleSubtitleSponsoredChildElement';
import getVisibleSubtitleSponsoredChildElementText from '../../subtitle/getVisibleSubtitleSponsoredChildElementText';
import hasSubsequence from '../../visible/hasSubsequence';

/**
 *  Determine if a FB feed post is sponsored.
 *  Single <a> element sponsored string:
 *  <a ...>Sponsored</a>
 *
 *  Multile <span> child elements within an <a> element:
 *
 *  @param {HTMLElement} element - A facebook post element.
 *  @param {String} sponsorStr - Sponsored string to scan for. (Defaults to 'sponsored').
 *  @returns {Boolean} true if the post subtitle contains a visible sponsored substring.
 */
const isSponsoredPost = (element, sponsorStr = 'Sponsored') => {
  // Select the subtitle of the post.
  const subtitleElem = getSubtitleElement(element);
  if (!subtitleElem) return false;

  // Select all span elements inside the first link (i.e., that may contain the text "Sponsored").
  const childElems = getSubtitleSponsoredChildElements(subtitleElem);
  if (!childElems) return false;

  // Retain only span elements that are visible (i.e., non-zero height, width, and opacity).
  const visibleChildElemStr = Array.from(childElems)
    .filter(isVisibleSubtitleSponsoredChildElement)
    .map(getVisibleSubtitleSponsoredChildElementText)
    .join('');

  return hasSubsequence(sponsorStr, visibleChildElemStr);
};

export default isSponsoredPost;
