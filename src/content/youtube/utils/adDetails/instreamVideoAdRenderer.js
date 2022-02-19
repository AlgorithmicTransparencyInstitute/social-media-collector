import extractAdReasons from '../extractAdReasons';
import getLinearAdAdvertiserUrl from '../getLinearAdAdvertiserUrl';

const instreamVideoAdRenderer = async ad => {
  const { reasons, title } = await extractAdReasons(
    ad.instreamVideoAdRenderer.playerOverlay.instreamAdPlayerOverlayRenderer.adInfoRenderer
      .adHoverTextButtonRenderer
  );
  const advertiser = getLinearAdAdvertiserUrl(ad);
  const adId = ad.instreamVideoAdRenderer.playerOverlay.instreamAdPlayerOverlayRenderer.adVideoId;

  return {
    type: 'instreamVideoAd',
    reasons,
    title,
    advertiser,
    adId
  };
};

export default instreamVideoAdRenderer;
