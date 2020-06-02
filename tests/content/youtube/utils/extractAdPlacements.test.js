import * as ADS from 'content/youtube/utils/ads';
import * as AD_DETAILS from 'content/youtube/utils/adDetails';

import injectId from 'content/youtube/utils/injectId';
import extractAdPlacements from 'content/youtube/utils/extractAdPlacements';

jest.mock('content/youtube/utils/arrayOfOne');
jest.mock('content/youtube/utils/ads');
jest.mock('content/youtube/utils/adDetails');
jest.mock('content/youtube/utils/injectId');

let result;

describe('when nothing is provided', () => {
  beforeAll(() => {
    result = extractAdPlacements();
  });

  it('returned undefined', () => {
    expect(result).toBeUndefined();
  });
});

describe('when something is provided', () => {
  const renderer = { key0: 'something' };
  const adPlacement = { adPlacementRenderer: { renderer } };
  const adPlacements = [adPlacement];
  const ads = 'some ads';
  const ad = { adType: jest.fn(() => ads) };
  const id = 'some-id';

  beforeAll(() => {
    injectId.mockImplementation(data => ({ id, ...data }));
    ADS.key0 = jest.fn(() => [ad]);
    AD_DETAILS.adType = jest.fn(() => ad);
    result = extractAdPlacements(adPlacements);
  });

  it('returned an array of ads with injected id', () => {
    expect(result).toEqual([{ id, ...ad }]);
  });
});
