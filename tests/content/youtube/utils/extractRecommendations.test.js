import extractRecommendations from 'content/youtube/utils/extractRecommendations';
import extractRecommendationData from 'content/youtube/utils/extractRecommendationData';

jest.mock('content/youtube/utils/extractRecommendationData');

let result;

const recommendations = ['some', 'recommendations'];
const hostUrl = 'http://www.youtube.com?v=12345';

const cleanup = () => {
  extractRecommendationData.mockReset();
};

describe('when there are nested results', () => {
  describe('has compactAutoplayRenderer', () => {
    const results = [
      {
        compactAutoplayRenderer: {
          contents: [{ compactVideoRenderer: 'some' }]
        }
      },
      {
        compactAutoplayRenderer: {
          contents: [{ compactVideoRenderer: 'results' }]
        }
      }
    ];

    const contents = {
      twoColumnWatchNextResults: {
        secondaryResults: { secondaryResults: { results } }
      }
    };

    const body = [{}, {}, {}, { response: { contents } }];

    beforeAll(() => {
      extractRecommendationData
        .mockReturnValueOnce(recommendations[0])
        .mockReturnValueOnce(recommendations[1]);
      result = extractRecommendations({ body, hostUrl });
    });

    afterAll(cleanup);

    it('returns the expected result', () => {
      expect(result).toEqual(recommendations);
    });
  });

  describe('does not have compactAutoplayRenderer', () => {
    const results = [{ compactVideoRenderer: 'some' }, { compactVideoRenderer: 'results' }];

    const contents = {
      twoColumnWatchNextResults: {
        secondaryResults: { secondaryResults: { results } }
      }
    };

    const body = [{}, {}, {}, { response: { contents } }];

    beforeAll(() => {
      extractRecommendationData
        .mockReturnValueOnce(recommendations[0])
        .mockReturnValueOnce(recommendations[1]);
      result = extractRecommendations({ body, hostUrl });
    });

    afterAll(cleanup);

    it('returns the expected result', () => {
      expect(result).toEqual(recommendations);
    });
  });
});

describe('when there is missing data', () => {
  [
    [
      'no nested results',
      {
        contents: {
          twoColumnWatchNextResults: {
            secondaryResults: { secondaryResults: {} }
          }
        }
      }
    ],
    ['no twoColumnWatchNextResults', { contents: {} }],
    ['no contents', {}],
    ['no response', undefined]
  ].forEach(([label, response]) => {
    describe(label, () => {
      const body = [{}, {}, {}, { response }];

      beforeAll(() => {
        result = extractRecommendations({ body, hostUrl });
      });

      afterAll(cleanup);

      it('returns an empty array', () => {
        expect(result).toEqual([]);
      });
    });
  });
});

describe('nothing in 3rd place', () => {
  const body = [{}, {}, {}];

  beforeAll(() => {
    result = extractRecommendations({ body, hostUrl });
  });

  afterAll(cleanup);

  it('returns an empty array', () => {
    expect(result).toEqual([]);
  });
});
