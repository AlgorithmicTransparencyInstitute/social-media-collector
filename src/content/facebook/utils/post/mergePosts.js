/**
 *  Merge a new post into an old post.
 *
 *  If there is no old post then just return a copy of the new post.
 *  Likewise if there is is no new post then just return a copy of
 *  the old post.
 *
 *  @param oldPost — The post to be overwritten.
 *  @param newPost — The post to overwrite.
 *  @returns A post that is a merger of the old and new posts with the new post taking precedence.
 */
const mergePosts = (oldPost, newPost) =>
  oldPost
    ? newPost
      ? {
          ...oldPost,
          ...newPost,
          payload: { ...oldPost.payload, ...newPost.payload }
        }
      : { ...oldPost }
    : { ...newPost };

export default mergePosts;
