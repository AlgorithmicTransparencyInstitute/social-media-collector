import updateBadge from 'background/ui/updateBadge';
import { CURRENT_CONSENT_VERSION } from 'common/storage/consent';

chrome.browserAction.setBadgeText = jest.fn();
chrome.browserAction.setBadgeBackgroundColor = jest.fn();

const cleanup = () => {
  chrome.browserAction.setBadgeText.clearMocks();
  chrome.browserAction.setBadgeBackgroundColor.clearMocks();
};

describe('when granted is CURRENT_CONSENT_VERSION', () => {
  beforeAll(async () => {
    await updateBadge(CURRENT_CONSENT_VERSION);
  });

  afterAll(cleanup);

  it('set the badge test to ""', () => {
    expect(chrome.browserAction.setBadgeText).toHaveBeenCalledWith({
      text: ''
    });
  });
});

describe('when granted is not CURRENT_CONSENT_VERSION', () => {
  beforeAll(async () => {
    await updateBadge(0);
  });

  afterAll(cleanup);

  it('set the badge test to "!"', () => {
    expect(chrome.browserAction.setBadgeText).toHaveBeenCalledWith({
      text: '!'
    });
  });

  it('set the background colour to red', () => {
    expect(chrome.browserAction.setBadgeBackgroundColor).toHaveBeenCalledWith({
      color: '#ff0000'
    });
  });
});
