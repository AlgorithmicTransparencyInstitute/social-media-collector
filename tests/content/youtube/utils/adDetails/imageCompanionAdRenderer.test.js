import imageCompanionAdRenderer from 'content/youtube/utils/adDetails/imageCompanionAdRenderer';
import extractAdReasons from 'content/youtube/utils/extractAdReasons';

jest.mock('content/youtube/utils/extractAdReasons');

const reasons = 'some reasons';
const title = 'some title';
const reasonsAndTitle = { reasons, title };
const adHoverTextButtonRenderer = 'render yeah!';
const adVideoId = '123456';
const url = 'http://www.youtube.com';

const data = {
  imageCompanionAdRenderer: {
    image: { thumbnail: { thumbnails: [{ url }] } },
    adInfoRenderer: { adHoverTextButtonRenderer },
    adVideoId
  }
};

const expected = {
  type: 'imageCompanionAd',
  reasons,
  title,
  advertiser: 'Unknown (image companion)',
  creative: url,
  adId: adVideoId
};

let result;

beforeAll(() => {
  extractAdReasons.mockReturnValue(reasonsAndTitle);
  result = imageCompanionAdRenderer(data);
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
