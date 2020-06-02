import inSequence from 'common/utils/inSequence';

import extractAdTargetingFromPre2020Post from './pre2020/extractAdTargetingFromPost';
import extractAdTargetingFromPost2020Post from './post2020/extractAdTargetingFromPost';

import { VERSION } from 'content/facebook/constants';

const extractAdTargetingFromPosts = async (posts, version) => {
  const extractAdTargetingFromPost =
    version === VERSION.PRE_2020
      ? extractAdTargetingFromPre2020Post
      : extractAdTargetingFromPost2020Post;

  try {
    await posts.map(extractAdTargetingFromPost).reduce(inSequence, Promise.resolve());
  } catch (err) {
    console.debug('extractAdTargetingFromPosts', version, posts);
    console.error(err);
  }
};

export default extractAdTargetingFromPosts;
