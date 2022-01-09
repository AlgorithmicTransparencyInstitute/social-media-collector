/**
 *  Has the user just upgraded from the old Globe and Mail fbpac-extension?
 *  https://github.com/globeandmail/fbpac-extension
 *
 *  @param version — the value returned by checkConsent
 *  @return true if the user has upgraded from the G&M fbpac-extension
 */
const isUpgradeFromGlobeAndMail = version => {
  // has the user already accepted the terms for the current version?
  if (version) return false;

  return false;
  // TODO: this section is not valid in manifest v3, b/c localStorage is not defined.
  // // look for a 'redux' object in localStorage
  // const redux = localStorage.getItem('redux');
  // if (!redux) return false;
  //
  // try {
  //   const { terms } = JSON.parse(redux);
  //   return Boolean(terms);
  // } catch (err) {
  //   console.error(err);
  //   return false;
  // }
};

export default isUpgradeFromGlobeAndMail;
