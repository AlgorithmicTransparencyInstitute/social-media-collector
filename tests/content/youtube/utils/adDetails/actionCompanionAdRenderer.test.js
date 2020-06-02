import actionCompanionAdRenderer from 'content/youtube/utils/adDetails/actionCompanionAdRenderer';

import extractAdReasons from 'content/youtube/utils/extractAdReasons';

jest.mock('content/youtube/utils/extractAdReasons');

const reasons = 'some reasons';
const title = 'some title';
const reasonsAndTitle = { reasons, title };
const adHoverTextButtonRenderer = 'some thing something';
const adVideoId = 'video-id';
const headline = 'hey!';
const description = 'there!';

const data = {
  actionCompanionAdRenderer: {
    headline: { text: headline },
    description: { text: description },
    adInfoRenderer: { adHoverTextButtonRenderer },
    adVideoId
  }
};

const expected = {
  type: 'actionCompanionAd',
  reasons,
  title,
  advertiser: `${headline} ${description}`,
  adId: adVideoId
};

let result;

beforeAll(() => {
  extractAdReasons.mockReturnValue(reasonsAndTitle);
  result = actionCompanionAdRenderer(data);
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
