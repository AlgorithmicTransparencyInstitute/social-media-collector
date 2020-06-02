const adActionInterstitialRenderer = ({ adActionInterstitialRenderer: ad }) => {
  const advertiser = `${ad.headline.text} ${ad.description.text}`;
  const adId = null;
  // TODO: work out where to find the adId.

  return {
    type: 'adActionInterstitial',
    advertiser,
    adId
  };
};

export default adActionInterstitialRenderer;
