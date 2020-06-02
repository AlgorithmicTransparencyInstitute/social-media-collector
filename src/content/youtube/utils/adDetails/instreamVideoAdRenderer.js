import extractAdReasons from '../extractAdReasons';
import getLinearAdAdvertiserUrl from '../getLinearAdAdvertiserUrl';

const instreamVideoAdRenderer = ad => {
  const { reasons, title } = extractAdReasons(
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
