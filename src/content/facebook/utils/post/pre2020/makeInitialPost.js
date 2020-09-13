import makeItemId from 'common/utils/makeItemId';
import getFbDtsgFromPostElement from '../../id/getFbDtsgFromPostElement';
import isPublicPost from './isPublicPost';
import isSponsoredPost from './isSponsoredPost';
import getPosterData from './getPosterData';
import sanitizePostContent from '../sanitizePostContent';

import { updateAndSavePost, getSavedPost } from '../../../posts';
import { HYPERFEED, VERSION } from '../../../constants';

const FIRST_DIV_INSIDE_POST = ':scope div.userContentWrapper > div:first-of-type';

const innerify = element => {
  if (element.querySelector('.userContentWrapper')) {
    return element.querySelector('.userContentWrapper');
  } else {
    return element;
  }
};

/**
 *  Given a post element make a fleshed out post object.
 *
 * @param element — a post's element.
 * @return an initialised post.
 * @sideeffect The post is saved to the `ALL_POSTS` set.
 */
const makeInitialPost = element => {
  const elem = element.querySelector(FIRST_DIV_INSIDE_POST);
  if (!elem) {
    console.debug('could not extract post element', element);
    return null;
  }

  const id = element.getAttribute('id').replace(HYPERFEED, '');
  const saved = getSavedPost(id);
  if (saved) return saved;

  const { isUserPost, ...posterData } = getPosterData(elem);

  const fresh = {
    // meta data used internally
    elem,
    isInFeed: true,
    isTagged: false,
    isProcessed: false,
    fbDtsg: getFbDtsgFromPostElement(elem),
    isPublic: isPublicPost(elem),
    isSponsored: isSponsoredPost(elem),
    isUserPost,
    ...posterData,
    adId: null,
    // the below is sent to the server.
    id,
    platform: 'facebook',
    version: VERSION.PRE_2020,
    itemId: makeItemId(),
    observedAt: new Date().getTime(),
    payload: {
      contentHtml: sanitizePostContent(innerify(elem).outerHTML, isUserPost)
    },
    // these get filled in later
    itemType: null,
    platformItemId: null
  };

  return updateAndSavePost(fresh);
};

export default makeInitialPost;
