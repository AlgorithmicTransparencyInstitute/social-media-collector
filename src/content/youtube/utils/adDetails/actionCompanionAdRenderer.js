import extractAdReasons from '../extractAdReasons';

const actionCompanionAdRenderer = ({ actionCompanionAdRenderer: ad }) => {
  const advertiser = `${ad.headline.text} ${ad.description.text}`;
  const { reasons, title } = extractAdReasons(ad.adInfoRenderer.adHoverTextButtonRenderer);
  const adId = ad.adVideoId;

  return {
    type: 'actionCompanionAd',
    reasons,
    title,
    advertiser,
    adId
  };
};

export default actionCompanionAdRenderer;
