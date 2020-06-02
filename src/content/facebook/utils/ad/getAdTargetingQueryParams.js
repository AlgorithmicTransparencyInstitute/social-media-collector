import grabVariable from '../inject/grabVariable';

/**
 *  Function that is injected into the page's script that enables
 *  the extraction of correct ad targeting query params given an ad targeting url.
 *
 *  @param ajaxifyUrl — The url to use to build a full set of query params
 *  @return The extracted data.
 *  @deprecated — use the data from `src/content/facebook/feedscanner#commonData()`
 */
const getAdTargetingQueryParams = ajaxifyUrl =>
  grabVariable(
    /* istanbul ignore next */
    url => {
      const parsed = new (window.require('URI'))(url);
      localStorage.setItem('url', url);
      const req = new window.AsyncRequest()
        .setURI(url)
        .setData(parsed)
        .setMethod('GET')
        .setRelativeTo(document.body)
        .setNectarModuleDataSafe(document.body)
        .setReadOnly(true);
      Object.assign(req.data, { __asyncDialog: 1 });
      Object.assign(req.data, window.require('getAsyncParams')(req.method));
      req._setUserActionID();
      req.setNewSerial();
      return req.uri.addQueryData(req.data).toString();
    },
    [ajaxifyUrl]
  );

export default getAdTargetingQueryParams;
