/**
 *  Construct the data needed for the variables param.
 *
 *  Example of the returned Object.
 *  {
 *    "adId": "23851939402290713",
 *    "fields": {
 *      "ad_id": "23851939402290713",
 *      "client_token": "AI@AQJSZf0sf2VX_wkJW1APNeFipp0AdiBWGcs-UB4n72YaqrSzVUNjwfhuacZWM2GIAyDRHRJhFHGqPQ34sr6KGn2m",
 *      "request_id": "f2c495bd23f425_23851939402290713"
 *    }
 *  }
 *
 *  @param adId — The adId previously extracted from the post
 *  @param clientToken — The client token prpreviously extracted from the post
 *  @return a URI encoded string of concatenated parameters
 */
function toVariables(adId, clientToken) {
  const requestIdPrefix = 'f2c495bd23f42_'; // Hardcoding this seems to work.
  const result = encodeURIComponent(
    JSON.stringify({
      adId,
      fields: {
        ad_id: adId,
        client_token: clientToken,
        request_id: requestIdPrefix + adId
      }
    })
  );
  return result;
}

export default toVariables;
