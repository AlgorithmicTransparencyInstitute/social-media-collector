const LINK = ':scope a';
const AJAXIFY = 'ajaxify';

/**
 *  Get the ad-targeting AJAX URL from the menu item "why am I seeing this [ad]?"
 *
 *  @param element - Menu item representing "why am I seeing this [ad]?".
 *  @returns The ad-targeting AJAX URL, or null.
 */
const getAdTargetingAjaxUrl = element => {
  if (!element) return null;

  const aElem = element.querySelector(LINK);
  return aElem.getAttribute(AJAXIFY);
};

export default getAdTargetingAjaxUrl;
