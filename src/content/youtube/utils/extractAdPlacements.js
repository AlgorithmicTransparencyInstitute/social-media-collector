/* eslint-disable no-prototype-builtins */
import injectId from './injectId';
import arrayOfOne from './arrayOfOne';
import * as ADS from './ads';
import * as AD_DETAILS from './adDetails';

const parseAdPlacements = adPlacements => {
  if (!adPlacements) return;

  const ads = [];
  adPlacements.forEach(adPlacement => {
    try {
      const { renderer } = adPlacement.adPlacementRenderer;
      const [key, ...keys] = Object.keys(renderer);
      /* istanbul ignore if */
      if (keys.length) console.debug('renderer has multiple keys', [key, ...keys]);

      const fn = typeof ADS[key] === 'function' ? ADS[key] : /* istanbul ignore next */ arrayOfOne;

      fn(renderer).forEach(ad => {
        const adKey = Object.keys(AD_DETAILS).find(key => ad.hasOwnProperty(key));
        /* istanbul ignore else */
        if (adKey) {
          ads.push(AD_DETAILS[adKey](ad));
        } else {
          console.debug('unknown ad type', ad);
        }
      });
    } catch (err) /* istanbul ignore next */ {
      console.debug('error processing ad placement', adPlacement);
      console.error(err);
    }
  });
  return ads.map(injectId);
};

export default parseAdPlacements;
