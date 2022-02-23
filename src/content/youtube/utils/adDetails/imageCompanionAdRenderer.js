import extractAdReasons from '../extractAdReasons';

const imageCompanionAdRenderer = async ({ imageCompanionAdRenderer: ad }, vidTitle) => {
  const creative = ad.image.thumbnail.thumbnails[0].url;
  const { reasons } = await extractAdReasons(ad.adInfoRenderer.adHoverTextButtonRenderer);
  const adId = ad.adVideoId;

  return {
    type: 'imageCompanionAd',
    reasons,
    title: vidTitle,
    advertiser: 'Unknown (image companion)',
    creative,
    adId
  };
};

export default imageCompanionAdRenderer;
