import extractAdPlacements from './extractAdPlacements';
import extractVideoId from './extractVideoId';
import trimTargeting from './trimTargeting';

export const PATHS = [
  '/get_midroll_info?',
  '/watch?v=',
  '/youtubei/v1/player/ad_break?',
  '/youtubei/v1/player?'
];
export const URLS = PATHS.map(path => 'https://www.youtube.com' + path);

const extractAds = ({ body, url, hostUrl }, { shareWatched, shareAds, shareAdTargeting }) => {
  const [MIDROLL_URL, WATCH_URL, AD_BREAK_URL, PLAYER_URL] = URLS;
  const hostVideo = shareWatched ? { id: extractVideoId(hostUrl), url: hostUrl } : undefined;

  if (!shareAds) {
    console.debug('Not sharing ads');
    return { hostVideo };
  }

  if (url.includes(WATCH_URL)) {
    if (!JSON.stringify(body).includes('adReasons')) return { hostVideo };
    console.debug('found "watch" ad', url, 'in', hostUrl);
    if (body.length < 4) {
      console.debug('count not extract ad from body', body);
      return { hostVideo };
    }

    const { author, title } = body[2].player && body[2].player.args ? body[2].player.args : {};
    const {
      adPlacements,
      videoDetails: { videoId: id, channelId, author: vAuthor, title: vTitle }
    } = body[3].playerResponse;

    const adPlc = extractAdPlacements(adPlacements);
    const ads = shareAdTargeting ? adPlc : adPlc.map(trimTargeting);

    return {
      ads,
      hostVideo: shareWatched
        ? {
            ...hostVideo,
            id: id || hostVideo.id,
            channelId,
            author: vAuthor || author,
            title: vTitle || title
          }
        : undefined
    };
  }

  if (url.includes(PLAYER_URL)) {
    if (!JSON.stringify(body).includes('adReasons')) return { hostVideo };
    console.debug('found "player" ad', url, 'in', hostUrl);

    const {
      author,
      title,
      videoId: id,
      channelId,
      author: vAuthor,
      title: vTitle
    } = body.videoDetails ? body.videoDetails : {};

    const adPlc = extractAdPlacements(body.adPlacements);
    const ads = shareAdTargeting ? adPlc : adPlc.map(trimTargeting);

    return {
      ads,
      hostVideo: shareWatched
        ? {
            ...hostVideo,
            id: id || hostVideo.id,
            channelId,
            author: vAuthor || author,
            title: vTitle || title
          }
        : undefined
    };
  }

  if (url.includes(MIDROLL_URL) || url.includes(AD_BREAK_URL)) {
    console.debug('found "mid roll" ad', url, 'in', hostUrl);
    const adPlc = extractAdPlacements(body.playerAds);
    const ads = shareAdTargeting ? adPlc : adPlc.map(trimTargeting);

    return { ads, hostVideo };
  }

  console.debug('neither watch nor midroll');
  return { hostVideo };
};

export default extractAds;
