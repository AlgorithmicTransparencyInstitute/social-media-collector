/**
 *  Extract needed data from the previously determined ad targeting url.
 *
 *  @param url — The ad targeting url we got from facebook in a prior step.
 *  @return an object with a bunch of needed properties.
 *  @deprecated — use the data from `src/content/facebook/feedscanner#commonData()`
 */
const getDataFromAdTargetingUrl = url => {
  const [_base, params] = url.split('?');
  const pairs = params.split('&');

  return pairs.reduce((acc, elem) => {
    const [key, value] = elem.split('=');
    acc[key] = value; // don't bother to url decode
    return acc;
  }, {});
};

export default getDataFromAdTargetingUrl;
