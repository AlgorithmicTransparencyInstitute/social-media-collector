const adActionInterstitialRenderer = ({ adActionInterstitialRenderer: ad }, vidTitle) => {
  const advertiser = `${ad.headline.text} ${ad.description.text}`;
  const adId = null;
  // TODO: work out where to find the adId.

  return {
    type: 'adActionInterstitial',
    title: vidTitle,
    advertiser,
    adId
  };
};

export default adActionInterstitialRenderer;
