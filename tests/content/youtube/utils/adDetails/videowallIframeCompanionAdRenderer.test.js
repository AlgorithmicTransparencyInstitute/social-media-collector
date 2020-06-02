import videowallIframeCompanionAdRenderer from 'content/youtube/utils/adDetails/videowallIframeCompanionAdRenderer';
import extractAdReasons from 'content/youtube/utils/extractAdReasons';

jest.mock('content/youtube/utils/extractAdReasons');

const reasons = 'some reasons';
const title = 'some title';
const reasonsAndTitle = { reasons, title };
const adHoverTextButtonRenderer = 'render yeah!';
const adVideoId = '123456';
const url = 'http://www.youtube.com';

let result;

beforeAll(() => {
  extractAdReasons.mockReturnValue(reasonsAndTitle);
});

describe('if onClickCommands', () => {
  const data = {
    videowallIframeCompanionAdRenderer: {
      onClickCommands: [{ loggingUrls: [{ baseUrl: `${url}?adurl=${url}` }] }],
      adVideoId,
      adInfoRenderer: { adHoverTextButtonRenderer }
    }
  };

  const expected = {
    type: 'videowallIframeCompanionAd',
    reasons,
    title,
    advertiser: url,
    adId: adVideoId,
    destUrl: undefined
  };

  beforeAll(() => {
    result = videowallIframeCompanionAdRenderer(data);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('if clickthroughEndpoint', () => {
  describe('has commandMetadata', () => {
    describe('url includes ?', () => {
      const data = {
        videowallIframeCompanionAdRenderer: {
          clickthroughEndpoint: {
            commandMetadata: {
              webCommandMetadata: { url: `${url}?click=${url}` }
            }
          },
          adVideoId,
          adInfoRenderer: { adHoverTextButtonRenderer }
        }
      };

      const expected = {
        type: 'videowallIframeCompanionAd',
        reasons,
        title,
        advertiser: url,
        adId: adVideoId,
        destUrl: undefined
      };

      beforeAll(() => {
        result = videowallIframeCompanionAdRenderer(data);
      });

      it('returned the expected result', () => {
        expect(result).toEqual(expected);
      });
    });

    describe('url does not include ?', () => {
      const data = {
        videowallIframeCompanionAdRenderer: {
          clickthroughEndpoint: {
            urlEndpoint: url,
            commandMetadata: { webCommandMetadata: { url } }
          },
          adVideoId,
          adInfoRenderer: { adHoverTextButtonRenderer }
        }
      };

      const expected = {
        type: 'videowallIframeCompanionAd',
        reasons,
        title,
        advertiser: null,
        adId: adVideoId,
        destUrl: url
      };

      beforeAll(() => {
        result = videowallIframeCompanionAdRenderer(data);
      });

      it('returned the expected result', () => {
        expect(result).toEqual(expected);
      });
    });
  });

  describe('does not have commandMetadata', () => {
    const data = {
      videowallIframeCompanionAdRenderer: {
        clickthroughEndpoint: {},
        adVideoId,
        adInfoRenderer: { adHoverTextButtonRenderer }
      }
    };

    const expected = {
      type: 'videowallIframeCompanionAd',
      reasons,
      title,
      advertiser: undefined,
      adId: adVideoId,
      destUrl: undefined
    };

    beforeAll(() => {
      result = videowallIframeCompanionAdRenderer(data);
    });

    it('returned the expected result', () => {
      expect(result).toEqual(expected);
    });
  });
});
