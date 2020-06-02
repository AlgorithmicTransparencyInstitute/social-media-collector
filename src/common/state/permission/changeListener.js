import actions from './actions';
import {
  USER_SHARE_INSTALLATION_ID,
  USER_SHARE_COUNTRY,
  USER_SHARE_LANGUAGE,
  USER_SHARE_GENDER,
  USER_SHARE_AGE,
  USER_SHARE_IP,
  USER_SHARE_DIAGNOSTICS,
  FB_SHARE_PUBLIC_USER_POSTS,
  FB_SHARE_PUBLIC_PAGE_POSTS,
  FB_SHARE_SPONSORED_POSTS,
  FB_SHARE_AD_TARGETING,
  YT_SHARE_WATCHED_VIDEOS,
  YT_SHARE_RECOMMENDED_VIDEOS,
  YT_SHARE_ADS,
  YT_SHARE_AD_TARGETING
} from 'common/keys';

import { onChanged } from 'common/storage';

// TODO: do this a smarter way.
const KNOWN_KEYS = [
  USER_SHARE_INSTALLATION_ID,
  USER_SHARE_COUNTRY,
  USER_SHARE_LANGUAGE,
  USER_SHARE_GENDER,
  USER_SHARE_AGE,
  USER_SHARE_IP,
  USER_SHARE_DIAGNOSTICS,
  FB_SHARE_PUBLIC_USER_POSTS,
  FB_SHARE_PUBLIC_PAGE_POSTS,
  FB_SHARE_SPONSORED_POSTS,
  FB_SHARE_AD_TARGETING,
  YT_SHARE_WATCHED_VIDEOS,
  YT_SHARE_RECOMMENDED_VIDEOS,
  YT_SHARE_ADS,
  YT_SHARE_AD_TARGETING
];

const changeListener = ({ dispatch }) =>
  onChanged(async changes => {
    Object.keys(changes).forEach(key => {
      if (KNOWN_KEYS.includes(key)) dispatch(actions.permissionChanged(key, changes[key]));
    });
  });

export default changeListener;
