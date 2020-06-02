/* istanbul ignore */

/* TODO: Add tests for this. */

import getAdIdAndToken from './getAdIdAndToken';
import getAdTargetingData from './getAdTargetingData';
import { getCommonData } from 'content/facebook/feedScanner';
import { updateAndSavePost } from 'content/facebook/posts';

const extractAdTargetingFromPost = async post => {
  const commonData = getCommonData();

  const {
    elem: { parentElement: elem }
  } = post;
  const { adId, clientToken } = await getAdIdAndToken(elem);
  if (!adId || !clientToken) {
    console.debug('missing adId or clientToken', adId, clientToken);
    return;
  }

  const adTargetingData = await getAdTargetingData(adId, clientToken, commonData);
  updateAndSavePost({
    ...post,
    adId,
    clientToken,
    payload: { ...post.payload, adTargetingData }
  });
};

export default extractAdTargetingFromPost;
