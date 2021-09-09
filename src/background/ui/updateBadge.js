import { CURRENT_CONSENT_VERSION } from 'common/storage/consent';

/**
 *  Flag an alert in the badge if the user has not accepted the latest terms and conditions.
 *
 *  @param version — The version of the consent that's been granted
 */
const updateBadge = async version => {
  if (version === CURRENT_CONSENT_VERSION) {
    chrome.action.setBadgeText({ text: '' });
  } else {
    chrome.action.setBadgeText({ text: '!' });
    chrome.action.setBadgeBackgroundColor({ color: '#ff0000' });
  }
};

export default updateBadge;
