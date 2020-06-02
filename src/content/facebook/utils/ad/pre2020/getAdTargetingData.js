/* eslint-disable camelcase */
import cleanAndParse from 'common/utils/cleanAndParse';
import getDataFromAdTargetingUrl from './../getDataFromAdTargetingUrl';
import makeFetcher from '../../makeFetcher';
import toVariables from '../toVariables';

/**
 *  Construct the body of the request to the graphql endpoint.
 *
 *  @param An object containing the data needed to construct the body
 *  @return The URI encoded concatenated body string.
 */
const makeBody = ({ adTargetingUrl, fbDtsg }) => {
  // hard code this as extracting it from jsmods is unreliable.
  const componentName = 'AdsPrefWAISTDialogQuery';
  // hard coding this seems to work.
  const WAIST_GRAPHQL_DOC_ID = '2602243929890886';

  const {
    id: adId,
    client_token: clientToken,
    __user,
    __a,
    __dyn,
    __csr,
    __req,
    __beoa,
    __pc,
    dpr,
    __rev,
    __s,
    __hsi,
    jazoest,
    __spin_r,
    __spin_b,
    __spin_t
  } = getDataFromAdTargetingUrl(adTargetingUrl);

  const body = {
    av: __user,
    __user,
    __a,
    __dyn,
    __csr,
    __req,
    __beoa,
    __pc,
    dpr,
    __rev,
    __s,
    __hsi,
    fb_dtsg: fbDtsg,
    jazoest,
    __spin_r,
    __spin_b,
    __spin_t,
    fb_api_caller_class: 'RelayModern',
    fb_api_req_friendly_name: componentName,
    variables: toVariables(adId, clientToken),
    doc_id: WAIST_GRAPHQL_DOC_ID
  };

  return Object.keys(body).reduce((acc, elem, i) => {
    const pair = `${elem}=${body[elem]}`;
    acc = i === 0 ? pair : [acc, '&', pair].join('');
    return acc;
  }, '');
};

/**
 *  Build the details needed to supply to fetch to perform the
 *  request for ad targeting data.
 *
 *  @param body — The body string built with makeBody.
 *  @returns the url and metadata to supply to fetch.
 */
const makeGraphQlRequest = body => ({
  url: 'https://www.facebook.com/api/graphql/',
  metadata: {
    credentials: 'include',
    headers: {
      accept: '*/*',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'content-type': 'application/x-www-form-urlencoded',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'viewport-width': '800'
    },
    referrer: 'https://www.facebook.com/',
    referrerPolicy: 'origin-when-cross-origin',
    body,
    method: 'POST',
    mode: 'cors'
  }
});

/**
 *  Using the functions above, construct a GraphQL request using
 *  the supplied data and send it off via fetch, then parse the response.
 *
 *  @param an object containing the jsmods data, the adTargetingUrl, the fbDtsg token, and the docId.
 *  @return The ad targeting data.
 */
const getAdTargetingData = async ({ adTargetingUrl, fbDtsg }) => {
  try {
    const body = makeBody({ adTargetingUrl, fbDtsg });
    const { url, metadata } = makeGraphQlRequest(body);
    const doFetch = makeFetcher();
    const response = await doFetch(url, metadata);

    /* istanbul ignore if */
    if (!response.ok) return null;

    const text = await response.text();
    const json = cleanAndParse(text);

    /* istanbul ignore if */
    if (json.error || json.errors) {
      console.debug('Server error', json);
      return null;
    }
    return json;
  } catch (err) /* istanbul ignore next */ {
    console.error(err);
    return null;
  }
};

export default getAdTargetingData;
