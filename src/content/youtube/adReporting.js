import makeReporter from './utils/makeReporter';
import trimTargeting from './utils/trimTargeting';

const adReporting = async (
  { ads, hostVideo, recommendations },
  { shareWatched, shareRecommended, shareAds, shareAdTargeting }
) => {
  const vid = shareWatched ? hostVideo : undefined;

  const reporter = makeReporter(vid);
  if (ads.length + recommendations.length) {
    let items = [];
    if (shareRecommended && recommendations.length) {
      console.debug('sharing recommendations', recommendations);
      items = items.concat(recommendations);
    }
    if (shareAds) {
      const toShare = shareAdTargeting ? ads : ads.map(trimTargeting);
      console.debug('sharing ads', toShare);
      items = items.concat(toShare);
    }

    /* istanbul ignore if */
    if (!items.length) {
      console.debug('Nothing to share');
      return;
    }

    try {
      await reporter(items);
      console.debug('data sent to background');
    } catch (err) /* istanbul ignore next */ {
      console.debug('Caught error sending to background');
      console.error(err);
    }
  }
};

export default adReporting;
