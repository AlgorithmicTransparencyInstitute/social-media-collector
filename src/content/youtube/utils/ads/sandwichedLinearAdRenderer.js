const sandwichedLinearAdRenderer = renderer =>
  renderer.linearAd && renderer.linearAd.instreamSurveyAdRenderer ? [renderer] : [];

export default sandwichedLinearAdRenderer;
