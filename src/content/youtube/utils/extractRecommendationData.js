import { hash } from 'common/utils/crypto';
import extractVideoId from 'content/youtube/utils/extractVideoId';

const extractRecommendationData = (renderer, hostUrl) => {
  if (!renderer) return null;
  const hostVideo = { id: extractVideoId(hostUrl), url: hostUrl };

  const {
    videoId,
    title: { simpleText: title },
    viewCountText,
    ownerBadges = [],
    longBylineText: {
      runs: [
        {
          text: author,
          navigationEndpoint: {
            browseEndpoint: { browseId: authorChannelId, canonicalBaseUrl: authorChannelPath }
          }
        }
      ]
    }
  } = renderer;
  return {
    id: hash(`${videoId} ${title}`),
    type: 'recommendedVideo',
    videoId,
    title,
    author,
    authorChannelId,
    authorChannelPath,
    viewCountText,
    badges: ownerBadges.map(({ metadataBadgeRenderer: { tooltip } }) => tooltip),
    hostVideo
  };
};

export default extractRecommendationData;
