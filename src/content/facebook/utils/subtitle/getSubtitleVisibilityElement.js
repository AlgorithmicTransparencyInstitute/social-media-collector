const PRIVACY_AUDIENCE = ':scope a.fbPrivacyAudienceIndicator';
const STREAM_PRIVACY = ':scope a.fbStreamPrivacy';
const TOOLTIP = ':scope div[data-tooltip-content]';

/**
 *  Get the link inside of a post subtitle, representing the post visibility settings.
 *
 *  @param element - A post subtitle element.
 *  @returns A link to post visibility or null.
 */
const getSubtitleVisibilityElement = element =>
  element.querySelector(PRIVACY_AUDIENCE) ||
  element.querySelector(STREAM_PRIVACY) ||
  element.querySelector(TOOLTIP);

export default getSubtitleVisibilityElement;
