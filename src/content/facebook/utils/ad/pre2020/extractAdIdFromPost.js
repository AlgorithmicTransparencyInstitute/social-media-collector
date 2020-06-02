import getAdTargeting from './getAdTargeting';
import { updateAndSavePost } from 'content/facebook/posts';

/**
 *  Gets the `adTargeting` data for the post and from that gets the `adId`,
 *  if there is one to be had.
 *
 *  @param {Object} post — A post.
 *  @sideeffect Ddata stored in local cache is updated by updateAndSavePost
 */
const extractAdIdFromPost = post =>
  new Promise((resolve, reject) => {
    const { elem } = post;

    getAdTargeting(elem)
      .then(({ adId }) => {
        if (adId) updateAndSavePost({ ...post, adId });
        resolve();
      })
      .catch(reject);
  });

export default extractAdIdFromPost;
