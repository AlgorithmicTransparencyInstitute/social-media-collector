import { checkPermission } from 'common/storage/permission';
import * as keys from 'common/keys';

const BUILD_PERMISSIONS = JSON.parse(process.env.PERMISSIONS);

const mergeDefaults = (acc, elem) => {
  const defaultValue = BUILD_PERMISSIONS[elem]
    ? BUILD_PERMISSIONS[elem].defaultValue || false
    : false;
  const key = keys[elem];
  acc.push([key, defaultValue]);
  return acc;
};

const checkWithDefault = ([key, defaultValue]) => checkPermission(key, defaultValue);

const permissions = async () => {
  const [shareWatched, shareRecommended, shareAds, shareAdTargeting] = await Promise.all(
    [
      'YT_SHARE_WATCHED_VIDEOS',
      'YT_SHARE_RECOMMENDED_VIDEOS',
      'YT_SHARE_ADS',
      'YT_SHARE_AD_TARGETING'
    ]
      .reduce(mergeDefaults, [])
      .map(checkWithDefault)
  );

  return {
    shareWatched,
    shareRecommended,
    shareAds,
    shareAdTargeting
  };
};

export default permissions;
