import getAdIdAndToken from './getAdIdAndToken';
import { updateAndSavePost } from 'content/facebook/posts';

/**
 *  Extracts the adId and updates the post if there is one to be had.
 *
 *  @param {Object} post — A post.
 *  @sideeffect Data stored in local cache is updated by updateAndSavePost
 */
const extractAdIdFromPost = async post => {
  const {
    elem: { parentElement: elem }
  } = post;

  const { adId, clientToken } = await getAdIdAndToken(elem);
  /* istanbul ignore else */
  if (adId) updateAndSavePost({ ...post, adId, clientToken });
};

export default extractAdIdFromPost;
