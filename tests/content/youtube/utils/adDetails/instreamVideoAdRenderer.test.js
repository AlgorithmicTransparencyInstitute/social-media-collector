import instreamVideoAdRenderer from 'content/youtube/utils/adDetails/instreamVideoAdRenderer';

import extractAdReasons from 'content/youtube/utils/extractAdReasons';
import getLinearAdAdvertiserUrl from 'content/youtube/utils/getLinearAdAdvertiserUrl';

jest.mock('content/youtube/utils/extractAdReasons');
jest.mock('content/youtube/utils/getLinearAdAdvertiserUrl');

const reasons = 'some reasons';
const title = 'some title';
const reasonsAndTitle = { reasons, title };
const adHoverTextButtonRenderer = 'some thing something';
const adVideoId = 'video-id';
const advertiser = 'buy me';

const data = {
  instreamVideoAdRenderer: {
    playerOverlay: {
      instreamAdPlayerOverlayRenderer: {
        adVideoId,
        adInfoRenderer: { adHoverTextButtonRenderer }
      }
    }
  }
};

const expected = {
  type: 'instreamVideoAd',
  reasons,
  title,
  advertiser,
  adId: adVideoId
};

let result;

beforeAll(() => {
  extractAdReasons.mockReturnValue(reasonsAndTitle);
  getLinearAdAdvertiserUrl.mockReturnValue(advertiser);

  result = instreamVideoAdRenderer(data);
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
