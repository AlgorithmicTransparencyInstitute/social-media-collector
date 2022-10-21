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
    console.error('missing adId or clientToken', adId, clientToken);
    return;
  }

  const adTargetingData = await getAdTargetingData(adId, clientToken, commonData);

  for (const obj of adTargetingData.data.waist_targeting_data) {
    delete obj.birthday;
  }

  updateAndSavePost({
    ...post,
    adId,
    clientToken,
    payload: { ...post.payload, adTargetingData }
  });
};

export default extractAdTargetingFromPost;
