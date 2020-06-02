import inSequence from 'common/utils/inSequence';
import extractAdIdFromPre2020Post from './pre2020/extractAdIdFromPost';
import extractAdIdFromPost2020Post from './post2020/extractAdIdFromPost';

import { VERSION } from 'content/facebook/constants';

/**
 *  Walks through the supplied array of posts, in sequence,
 *  and extracts adIds for each one, if possible.
 *
 *  @param posts — An array of posts.
 *  @sideeffect The posts data stored in local cache is updated by extractAdIdFromPost
 */
const extractAdIdFromPosts = async (posts, version) => {
  const extractAdIdFromPost =
    version === VERSION.PRE_2020 ? extractAdIdFromPre2020Post : extractAdIdFromPost2020Post;

  try {
    await posts.map(extractAdIdFromPost).reduce(inSequence, Promise.resolve());
  } catch (err) {
    console.error('error in extractAdIdFromPre2020Posts', err);
  }
};

export default extractAdIdFromPosts;
