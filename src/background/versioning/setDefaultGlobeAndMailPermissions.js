import { savePermission } from 'common/storage/permission';
import * as keys from 'common/keys';

const permissions = JSON.parse(process.env.PERMISSIONS);

export const EXCLUDED_PERMISSIONS = [
  'FB_SHARE_PUBLIC_USER_POSTS',
  'FB_SHARE_PUBLIC_PAGE_POSTS',
  'YT_SHARE_WATCHED_VIDEOS',
  'YT_SHARE_RECOMMENDED_VIDEOS',
  'YT_SHARE_ADS',
  'YT_SHARE_AD_TARGETING',
  'USER_SHARE_INSTALLATION_ID',
  'USER_SHARE_COUNTRY',
  'USER_SHARE_LANGUAGE',
  'USER_SHARE_GENDER',
  'USER_SHARE_AGE',
  'USER_SHARE_IP',
  'USER_SHARE_DIAGNOSTICS'
];

const defaults = Object.keys(permissions).reduce((acc, elem) => {
  const key = keys[elem];
  const value = EXCLUDED_PERMISSIONS.includes(elem)
    ? false
    : permissions[elem].defaultValue || false;

  acc.push({ key, value });
  return acc;
}, []);

const setDefaultGlobeAndMailPermissions = async () =>
  Promise.all(defaults.map(({ key, value }) => savePermission(key, value)));

export default setDefaultGlobeAndMailPermissions;
