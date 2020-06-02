import { CURRENT_CONSENT_VERSION } from 'common/storage/consent';

/**
 *  Flag an alert in the badge if the user has not accepted the latest terms and conditions.
 *
 *  @param version — The version of the consent that's been granted
 */
const updateBadge = async version => {
  if (version === CURRENT_CONSENT_VERSION) {
    chrome.browserAction.setBadgeText({ text: '' });
  } else {
    chrome.browserAction.setBadgeText({ text: '!' });
    chrome.browserAction.setBadgeBackgroundColor({ color: '#ff0000' });
  }
};

export default updateBadge;
