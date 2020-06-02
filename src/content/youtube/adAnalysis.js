import extractAds from './utils/extractAds';
import extractRecommendations from './utils/extractRecommendations';

const adAnalysis = (data, perms) => ({
  ads: [], // placeholder in case there are no ads.
  ...extractAds(data, perms),
  recommendations: extractRecommendations(data, perms)
});

export default adAnalysis;
