import invideoOverlayAdRenderer from 'content/youtube/utils/adDetails/invideoOverlayAdRenderer';
import extractAdReasons from 'content/youtube/utils/extractAdReasons';

jest.mock('content/youtube/utils/extractAdReasons');

const reasons = 'some reasons';
const title = 'some title';
const reasonsAndTitle = { reasons, title };
const adHoverTextButtonRenderer = 'render yeah!';
const adVideoId = '123456';
const url = 'http://www.youtube.com';
const displayUrl = url;

let result;

beforeAll(() => {
  extractAdReasons.mockReturnValue(reasonsAndTitle);
});

describe('if imageOverlayAdContentRenderer', () => {
  const data = {
    invideoOverlayAdRenderer: {
      adInfoRenderer: { adHoverTextButtonRenderer },
      contentSupportedRenderer: {
        imageOverlayAdContentRenderer: {
          image: {
            thumbnail: {
              thumbnails: [{ url }]
            }
          }
        }
      }
    }
  };

  const expected = {
    type: 'invideoOverlayAd',
    reasons,
    title,
    advertiser: 'Unknown',
    creative: url,
    adId: null,
    destUrl: undefined
  };

  beforeAll(() => {
    result = invideoOverlayAdRenderer(data);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('if textOverlayAdContentRenderer', () => {
  const description = 'some description';
  const data = {
    invideoOverlayAdRenderer: {
      adVideoId,
      adInfoRenderer: { adHoverTextButtonRenderer },
      contentSupportedRenderer: {
        textOverlayAdContentRenderer: {
          title: { text: title },
          description: { text: description },
          displayUrl: { text: displayUrl },
          navigationEndpoint: { urlEndpoint: { url: `${url}?adurl=${url}` } }
        }
      }
    }
  };

  const expected = {
    type: 'invideoOverlayAd',
    reasons,
    title,
    advertiser: 'Unknown',
    creative: [title, description, displayUrl],
    adId: null,
    destUrl: url
  };

  beforeAll(() => {
    result = invideoOverlayAdRenderer(data);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('if unknown key', () => {
  const data = {
    invideoOverlayAdRenderer: {
      adVideoId,
      adInfoRenderer: { adHoverTextButtonRenderer },
      contentSupportedRenderer: {}
    }
  };

  const expected = {
    type: 'invideoOverlayAd',
    reasons,
    title,
    advertiser: 'Unknown',
    creative: undefined,
    adId: null,
    destUrl: undefined
  };

  beforeAll(() => {
    result = invideoOverlayAdRenderer(data);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});
