/**
 *  returns an array filter function that filters the supplied posts according
 *  to whether the post is public and whether the user has granted permission
 *  to share public user posts.
 *
 *  @param {Boolean} canShare — pass in true if the user has granted `FB_SHARE_PUBLIC_USER_POSTS`
 *  @return {Function} a filter function that filters out non-public user posts
 */
export const shareablePublicUserPosts = canShare => ({ isProcessed, isPublic, isUserPost }) =>
  !isProcessed && isPublic && isUserPost && canShare;

/**
 *  returns an array filter function that filters the supplied posts according
 *  to whether the post is public and whether the user has granted permission
 *  to share public page posts.
 *
 *  @param {Boolean} canShare — pass in true if the user has granted `FB_SHARE_PUBLIC_PAGE_POSTS`
 *  @return {Function} a filter function that filters out non-public page posts
 */
export const shareablePublicPagePosts = canShare => ({ isProcessed, isPublic, isUserPost }) =>
  !isProcessed && isPublic && !isUserPost && canShare;

/**
 *  returns an array filter function that filters the supplied posts according
 *  to whether the post is a sponsored post and whether the user has granted
 *  permission to share sponsored posts.
 *
 *  @param {Boolean} canShare — pass in true if the user has granted FB_SHARE_SPONSORED_POSTS or FB_SHARE_AD_TARGETING
 *  @return {Function} a filter function that filters out non-sponsored posts
 */
export const shareableSponsoredPosts = canShare => ({ isProcessed, isSponsored }) =>
  !isProcessed && isSponsored && canShare;

/**
 *  returns an array filter function that filters the supplied posts according
 *  to whether the post is allowed to be shared.
 *
 *  @return {Function} a filter function that filters out posts that can be shared
 */
export const unsharable = ({ sharePublicUser, sharePublicPage, shareSponsored }) => ({
  isProcessed,
  isPublic,
  isUserPost,
  isSponsored
}) =>
  !isProcessed &&
  (!isPublic ||
    (isSponsored && !shareSponsored) ||
    (isPublic && isUserPost && !sharePublicUser) ||
    (isPublic && !isUserPost && !sharePublicPage));
