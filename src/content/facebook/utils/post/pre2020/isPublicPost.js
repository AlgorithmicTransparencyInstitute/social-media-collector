import getSubtitleElement from '../../subtitle/getSubtitleElement';
import getSubtitleVisibilityElement from '../../subtitle/getSubtitleVisibilityElement';
import isSubtitleVisibilityElementPublic from '../../subtitle/isSubtitleVisibilityElementPublic';

/**
 *  Is a Facebook feed post visible globally.
 *
 *  Example:
 *  <a class="fbStreamPrivacy fbPrivacyAudienceIndicator ..." aria-label="Public" data-tooltip-content="Public" ...>...</a>
 *
 *  Example:
 *  <div class="..." data-hover="tooltip" data-tooltip-content="Shared with: Jason's friends" aria-label="Shared with: Jason's friends">...</div>
 *
 *  @param {HTMLElement} element - A post element
 *  @returns {Boolean} true if the post's visibility is global.
 */
const isPublicPost = element => {
  // Select the subtitle of the post.
  const subtitle = getSubtitleElement(element);
  if (!subtitle) return false;

  // Select the visibility indicator element.
  const visibility = getSubtitleVisibilityElement(subtitle);

  return visibility ? isSubtitleVisibilityElementPublic(visibility) : false;
};

export default isPublicPost;
