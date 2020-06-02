/* eslint-disable no-prototype-builtins */
import extractAdReasons from '../extractAdReasons';

const invideoOverlayAdRenderer = ({ invideoOverlayAdRenderer: ad }) => {
  const [creative, destUrl] = ad.contentSupportedRenderer.hasOwnProperty(
    'imageOverlayAdContentRenderer'
  )
    ? [ad.contentSupportedRenderer.imageOverlayAdContentRenderer.image.thumbnail.thumbnails[0].url]
    : ad.contentSupportedRenderer.hasOwnProperty('textOverlayAdContentRenderer')
    ? [
        [
          ad.contentSupportedRenderer.textOverlayAdContentRenderer.title.text,
          ad.contentSupportedRenderer.textOverlayAdContentRenderer.description.text,
          ad.contentSupportedRenderer.textOverlayAdContentRenderer.displayUrl.text
        ],
        new URL(
          ad.contentSupportedRenderer.textOverlayAdContentRenderer.navigationEndpoint.urlEndpoint.url
        ).searchParams.get('adurl')
      ]
    : [];
  const { reasons, title } = extractAdReasons(ad.adInfoRenderer.adHoverTextButtonRenderer);
  // TODO: work out where to find the adId.
  const adId = null;

  return {
    type: 'invideoOverlayAd',
    reasons,
    title,
    advertiser: 'Unknown',
    creative,
    adId,
    destUrl
  };
};

export default invideoOverlayAdRenderer;
