import getAdTargetingQueryParams from '../getAdTargetingQueryParams';
import extractJsmods from '../extractJsmods';

const FB_BASE = 'https://www.facebook.com';

/**
 *  Make an ajax request for ad targeting data.
 *
 *  @param url — The url use to determine the correct ad targeting url.
 *  @returns {Object|null} Ad targeting data.
 */
const getAdTargetingJsmods = async url => {
  if (!url) return null;

  return new Promise(resolve => {
    const queryParams = getAdTargetingQueryParams(url);
    const adTargetingUrl = `${FB_BASE}${queryParams}`;

    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      /* istanbul ignore else */
      if (req.readyState === 4)
        resolve({
          adTargetingUrl,
          jsmods: extractJsmods(req.response)
        });
    };

    req.open('GET', adTargetingUrl, true);
    req.send();
  });
};

export default getAdTargetingJsmods;
