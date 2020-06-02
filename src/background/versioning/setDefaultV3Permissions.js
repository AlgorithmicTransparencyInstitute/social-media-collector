import { savePermission } from 'common/storage/permission';
import * as keys from 'common/keys';

export const EXCLUDED_PERMISSIONS = [
  'YT_SHARE_AD_TARGETING',
  'YT_SHARE_ADS',
  'YT_SHARE_RECOMMENDED_VIDEOS',
  'YT_SHARE_WATCHED_VIDEOS'
];

const defaults = EXCLUDED_PERMISSIONS.reduce((acc, elem) => {
  const key = keys[elem];
  const value = false;

  acc.push({ key, value });
  return acc;
}, []);

const setDefaultV3Permissions = async () =>
  Promise.all(defaults.map(({ key, value }) => savePermission(key, value)));

export default setDefaultV3Permissions;
