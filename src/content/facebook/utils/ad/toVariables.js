/**
 *  Construct the data needed for the variables param.
 *
 *  @param adId — The adId previously extracted from the post
 *  @param clientToken — The client token prpreviously extracted from the post
 *  @return a URI encoded string of concatenated parameters
 */
const toVariables = (adId, clientToken) =>
  encodeURIComponent(
    JSON.stringify({
      adId,
      clientToken: decodeURIComponent(clientToken)
    })
  );

export default toVariables;
