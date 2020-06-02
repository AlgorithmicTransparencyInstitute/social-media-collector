import getMenuIconFromPostElement from '../../menu/pre2020/getMenuIconFromPostElement';
import getMenuOverlayFromMenuIcon from '../../menu/pre2020/getMenuOverlayFromMenuIcon';
import getMenuItemFromMenuOverlay from '../../menu/getMenuItemFromMenuOverlay';
import getAdId from './getAdId';
import getAdTargetingAjaxUrl from './getAdTargetingAjaxUrl';
import getAdTargetingJsmods from './getAdTargetingJsmods';

const EMPTY = {
  adId: null,
  adTargetingUrl: null,
  jsmods: null
};

/**
 *  Get the ad-targeting information for the given element.
 *
 *  @param element — The facebook post element.
 *  @return the adTargetingData, adId, and adTargetingAjaxUrl
 */
const getAdTargeting = async element => {
  const menuIcon = getMenuIconFromPostElement(element);
  if (!menuIcon) return EMPTY;

  menuIcon.click();

  const menuItem = await getMenuOverlayFromMenuIcon(menuIcon).then(getMenuItemFromMenuOverlay);

  const adTargetingAjaxUrl = getAdTargetingAjaxUrl(menuItem);
  if (!adTargetingAjaxUrl) return EMPTY;
  const adId = getAdId(adTargetingAjaxUrl);

  menuIcon.click();

  const { adTargetingUrl, jsmods } = await getAdTargetingJsmods(adTargetingAjaxUrl);

  return { adId, adTargetingUrl, jsmods };
};

export default getAdTargeting;
