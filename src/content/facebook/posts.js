import mergePosts from './utils/post/mergePosts';

const ALL_POSTS = new Map();

/**
 *  If there is a post with the given `id` then return it,
 *  otherwise return the default post.
 *
 * @param id — The previously computed id.
 * @return the saved post or undefined.
 * @sideeffect The post is read from the `ALL_POSTS` map.
 */
export const getSavedPost = id => ALL_POSTS.get(id);

/**
 *  Take the new post details, merge them with the old details
 *  save the merged post into the ALL_POSTS map, and then
 *  return the updated post.
 *
 * @param postData — the new post details.
 * @return the updated and saved post.
 * @sideeffect The post is read from and saved to the `ALL_POSTS` set.
 */
export const updateAndSavePost = ({ id, ...postData }) => {
  const post = mergePosts(getSavedPost(id) || { id }, postData);
  ALL_POSTS.set(id, post);
  return post;
};

// just used in tests
export const reset = () => {
  ALL_POSTS.clear();
};
