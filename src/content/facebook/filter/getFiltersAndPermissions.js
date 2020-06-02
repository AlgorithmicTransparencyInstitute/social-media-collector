import permission from './permission';
import {
  shareablePublicUserPosts,
  shareablePublicPagePosts,
  shareableSponsoredPosts,
  unsharable
} from './shared';

const getFiltersAndPermissions = async () => {
  const permissions = await permission();
  const { sharePublicUser, sharePublicPage, shareSponsored, shareAdTargeting } = permissions;

  const filters = {
    canSharePublicUser: shareablePublicUserPosts(sharePublicUser),
    canSharePublicPage: shareablePublicPagePosts(sharePublicPage),
    canShareSponsored: shareableSponsoredPosts(shareSponsored),
    canShareAdTargeting: shareableSponsoredPosts(shareAdTargeting),
    cannotShareAdTargeting: shareableSponsoredPosts(!shareAdTargeting),
    cannotShare: unsharable(permissions)
  };

  return { filters, permissions };
};

export default getFiltersAndPermissions;
