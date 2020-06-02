import getMenuIconFromPostElement from 'content/facebook/utils/menu/pre2020/getMenuIconFromPostElement';
import getMenuOverlayFromMenuIcon from 'content/facebook/utils/menu/pre2020/getMenuOverlayFromMenuIcon';
import getMenuItemFromMenuOverlay from 'content/facebook/utils/menu/getMenuItemFromMenuOverlay';
import getAdTargetingAjaxUrl from 'content/facebook/utils/ad/pre2020/getAdTargetingAjaxUrl';
import getAdTargetingJsmods from 'content/facebook/utils/ad/pre2020/getAdTargetingJsmods';
import getAdId from 'content/facebook/utils/ad/pre2020/getAdId';

import getAdTargeting from 'content/facebook/utils/ad/pre2020/getAdTargeting';

jest.mock('content/facebook/utils/menu/pre2020/getMenuIconFromPostElement');
jest.mock('content/facebook/utils/menu/pre2020/getMenuOverlayFromMenuIcon');
jest.mock('content/facebook/utils/menu/getMenuItemFromMenuOverlay');
jest.mock('content/facebook/utils/ad/pre2020/getAdTargetingAjaxUrl');
jest.mock('content/facebook/utils/ad/pre2020/getAdTargetingJsmods');
jest.mock('content/facebook/utils/ad/pre2020/getAdId');

const element = 'some element';

let result;

describe('when no menu icon', () => {
  const expected = {
    adId: null,
    adTargetingUrl: null,
    jsmods: null
  };

  beforeAll(async () => {
    getMenuIconFromPostElement.mockReturnValue(null);
    result = await getAdTargeting(element);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('when there is a menu icon', () => {
  const menuIcon = {
    click: jest.fn()
  };
  const menuOverlay = 'some menu overlay';
  const menuItem = 'some menu item';

  const adTargetingAjaxUrl = 'https://some-url.tes';
  const adId = 'some-id';
  const adTargetingUrl = 'https://some-targeting-url.tes';
  const jsmods = 'some jsmods';

  const expected = { adId, adTargetingUrl, jsmods };

  beforeAll(async () => {
    getMenuIconFromPostElement.mockReturnValue(menuIcon);
    getMenuOverlayFromMenuIcon.mockResolvedValue(menuOverlay);
    getMenuItemFromMenuOverlay.mockResolvedValue(menuItem);
    getAdTargetingAjaxUrl.mockReturnValue(adTargetingAjaxUrl);
    getAdId.mockReturnValue(adId);
    getAdTargetingJsmods.mockResolvedValue({ adTargetingUrl, jsmods });

    result = await getAdTargeting(element);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('when adTargetingAjaxUrl is null', () => {
  const menuIcon = {
    click: jest.fn()
  };
  const menuOverlay = 'some menu overlay';
  const menuItem = 'some menu item';

  const adId = 'some-id';
  const adTargetingUrl = null;
  const jsmods = 'some jsmods';

  const expected = { adId: null, adTargetingUrl: null, jsmods: null };

  beforeAll(async () => {
    getMenuIconFromPostElement.mockReturnValue(menuIcon);
    getMenuOverlayFromMenuIcon.mockResolvedValue(menuOverlay);
    getMenuItemFromMenuOverlay.mockResolvedValue(menuItem);
    getAdTargetingAjaxUrl.mockReturnValue(null);
    getAdId.mockReturnValue(adId);
    getAdTargetingJsmods.mockResolvedValue({ adTargetingUrl, jsmods });

    result = await getAdTargeting(element);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});
