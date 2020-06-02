import sandwichedLinearAdRenderer from 'content/youtube/utils/ads/sandwichedLinearAdRenderer';

describe('when no renderer is supplied', () => {
  it('returns an empty array', () => {
    expect(sandwichedLinearAdRenderer({})).toEqual([]);
  });
});

describe('when inadequate renderer is supplied', () => {
  const renderer = { linearAd: {} };

  it('returns an empty array', () => {
    expect(sandwichedLinearAdRenderer(renderer)).toEqual([]);
  });
});

describe('when good renderer is supplied', () => {
  const renderer = { linearAd: { instreamSurveyAdRenderer: true } };

  it('returns an array containing the renderer', () => {
    expect(sandwichedLinearAdRenderer(renderer)).toEqual([renderer]);
  });
});
