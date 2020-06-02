const trimPost = ({
  id,
  url,
  platform,
  version,
  itemId,
  isSponsored,
  isPublic,
  adId,
  observedAt,
  isUserPost,
  postedBy,
  payload: { contentHtml, innerHtml, adTargetingData, adTargetingHtml }
}) => {
  /* istanbul ignore if */
  if (!contentHtml) {
    console.debug('missing contentHtml', adId, itemId);
  }

  const post = { id, platform, version, itemId, observedAt };

  return isSponsored
    ? {
        ...post,
        platformItemId: adId,
        itemType: 'sponsoredPost',
        url,
        postedBy,
        payload: {
          adTargetingHtml,
          adTargetingData,
          contentHtml,
          innerHtml
        }
      }
    : isPublic
    ? {
        ...post,
        itemType: isUserPost ? 'publicUserPost' : 'publicPagePost',
        url,
        postedBy,
        payload: { contentHtml, innerHtml }
      }
    : {
        ...post,
        itemType: 'privatePost', // privatePost should never be shared.
        payload: {}
      };
};

export default trimPost;
