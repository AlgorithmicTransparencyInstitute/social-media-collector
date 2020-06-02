import { checkPermission } from 'common/storage/permission';
import {
  FB_SHOW_COLLECTION_STATUS,
  FB_SHARE_PUBLIC_USER_POSTS,
  FB_SHARE_PUBLIC_PAGE_POSTS,
  FB_SHARE_SPONSORED_POSTS,
  FB_SHARE_AD_TARGETING
} from 'common/keys';

const permission = async () => {
  const [
    showCollectionStatus,
    sharePublicUser,
    sharePublicPage,
    shareSponsored,
    shareAdTargeting
  ] = await Promise.all(
    [
      [FB_SHOW_COLLECTION_STATUS, process.env.IS_DEBUG === 'true'],
      [FB_SHARE_PUBLIC_USER_POSTS, false],
      FB_SHARE_PUBLIC_PAGE_POSTS,
      FB_SHARE_SPONSORED_POSTS,
      FB_SHARE_AD_TARGETING
    ].map(key => (Array.isArray(key) ? checkPermission(...key) : checkPermission(key)))
  );

  return {
    showCollectionStatus,
    sharePublicUser,
    sharePublicPage,
    shareSponsored,
    shareAdTargeting
  };
};

export default permission;
