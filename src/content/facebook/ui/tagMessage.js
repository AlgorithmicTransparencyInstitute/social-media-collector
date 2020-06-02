export const AD_AND_TARGETING_SHARED =
  'This advertisement and its targeting information have been collected';
export const AD_SHARED_BUT_NOT_TARGETING =
  'This advertisement was collected but its targeting information has not as you are not sharing ad targeting data';
export const NOT_SHARING_ADS =
  'This advertisement has not been collected as you are not sharing sponsored posts';
export const AD_SHARED_BUT_NO_TARGETING_DATA_AVAILABLE =
  'This advertisement has been collected but targeting information could not be collected';
export const PUBLIC_USER_SHARED = 'This public user post has been collected';
export const PUBLIC_PAGE_SHARED = 'This public page post has been collected';
export const PUBLIC_NOT_SHARED = 'This public post was not shared';
export const PRIVATE_NOT_SHARED = 'This post is private and has not been collected';

const tagMessage = (
  { isSponsored, isPublic, isUserPost, payload: { adTargetingData } = {} },
  { sharePublicUser, sharePublicPage, shareSponsored, shareAdTargeting }
) =>
  isSponsored
    ? adTargetingData
      ? shareSponsored
        ? shareAdTargeting
          ? AD_AND_TARGETING_SHARED
          : AD_SHARED_BUT_NOT_TARGETING
        : NOT_SHARING_ADS
      : shareSponsored
      ? AD_SHARED_BUT_NO_TARGETING_DATA_AVAILABLE
      : NOT_SHARING_ADS
    : isPublic
    ? sharePublicUser && isUserPost
      ? PUBLIC_USER_SHARED
      : sharePublicPage && !isUserPost
      ? PUBLIC_PAGE_SHARED
      : PUBLIC_NOT_SHARED
    : PRIVATE_NOT_SHARED;

export default tagMessage;
