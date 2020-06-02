/**
 *  Has the user just upgraded from the old v2 consent to v3 consent?
 *
 *  @param version — the value returned by checkConsent
 *  @return true if the user has upgraded from the v2 consent to v3
 */
const isUpgradeFrom2to3 = version => version === 2;

export default isUpgradeFrom2to3;
