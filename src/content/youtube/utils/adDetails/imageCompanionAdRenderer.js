import extractAdReasons from '../extractAdReasons';

const imageCompanionAdRenderer = ({ imageCompanionAdRenderer: ad }) => {
  const creative = ad.image.thumbnail.thumbnails[0].url;
  const { reasons, title } = extractAdReasons(ad.adInfoRenderer.adHoverTextButtonRenderer);
  const adId = ad.adVideoId;

  return {
    type: 'imageCompanionAd',
    reasons,
    title,
    advertiser: 'Unknown (image companion)',
    creative,
    adId
  };
};

export default imageCompanionAdRenderer;
