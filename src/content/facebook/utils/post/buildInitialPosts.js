import makeInitialPre2020Post from './pre2020/makeInitialPost';
import makeInitialPost2020Post from './post2020/makeInitialPost';

import determineFbVersion from './determineFbVersion';

/**
 *  Builds the initial set of posts based on elements that are visible hyperfeed stories.
 *
 *  @param {Document} doc — Used in testing only.
 *  @returns {Array} — array of non-null posts.
 */
const buildInitialPosts = (/* istanbul ignore next */ doc = document) => {
  const { elements, version } = determineFbVersion(doc);

  const makeInitialPost = version === 'pre2020' ? makeInitialPre2020Post : makeInitialPost2020Post;

  return { posts: elements.map(makeInitialPost).filter(Boolean), version };
};

export default buildInitialPosts;
