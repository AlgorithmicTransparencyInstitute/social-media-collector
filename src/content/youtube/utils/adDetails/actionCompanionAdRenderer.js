import extractAdReasons from '../extractAdReasons';

const actionCompanionAdRenderer = async ({ actionCompanionAdRenderer: ad }, vidTitle) => {
  const advertiser = `${ad.headline.text} ${ad.description.text}`;
  const { reasons } = await extractAdReasons(ad.adInfoRenderer.adHoverTextButtonRenderer);
  const adId = ad.adVideoId;

  return {
    type: 'actionCompanionAd',
    reasons,
    title: vidTitle,
    advertiser,
    adId
  };
};

export default actionCompanionAdRenderer;
