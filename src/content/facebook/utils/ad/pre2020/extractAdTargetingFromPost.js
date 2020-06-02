import DOMPurify from 'dompurify';

import getAdTargeting from './getAdTargeting';
import getAdTargetingData from './getAdTargetingData';
import extractAdTargetingHtml from '../extractAdTargetingHtml';
import { updateAndSavePost } from 'content/facebook/posts';
import { suspend } from 'content/facebook/feedScanner';

/**
 *  TODO: Rewire this to use `content/facebook/feedscanner#getCommonData()`
 */
const extractAdTargetingFromPost = post =>
  new Promise((resolve, reject) => {
    const { elem, fbDtsg, payload } = post;

    getAdTargeting(elem)
      .then(({ adTargetingUrl, adId, jsmods }) => {
        if (!adId) return resolve();
        if (!jsmods) {
          suspend();
          return reject(new Error('Scanning suspended due to facebook block'));
        }

        const adTargetingHtml = extractAdTargetingHtml(jsmods);

        const ad = {
          ...post,
          adTargetingUrl,
          adId,
          payload: {
            ...payload,
            adTargetingHtml: DOMPurify.sanitize(adTargetingHtml)
          }
        };

        return getAdTargetingData({
          adTargetingUrl,
          fbDtsg
        })
          .then(adTargetingData => {
            updateAndSavePost({
              ...ad,
              payload: { ...ad.payload, adTargetingData }
            });
            resolve();
          })
          .catch(reject);
      })
      .catch(reject);
  });

export default extractAdTargetingFromPost;
