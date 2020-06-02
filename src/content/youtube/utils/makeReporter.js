import { sendToBackground } from 'messaging';
import { UPLOAD_POSTS } from 'common/actions';
import makeItemId from 'common/utils/makeItemId';
import { loadArchiveIndex, addItemsToArchive } from 'common/storage/archive';

import makePost from './makePost';

const makeReporter = hostVideo => {
  const postMaker = makePost(hostVideo, makeItemId());

  return async observations => {
    console.debug('reporting observations', observations);
    if (!observations || !observations.length) {
      console.debug('No observations to report');
      return;
    }
    const posts = observations.map(postMaker);
    const existing = await loadArchiveIndex();
    const trimmed = posts.filter(({ id }) => !existing.includes(id));
    if (!trimmed.length) return;
    console.debug('adding to archive', trimmed);
    await addItemsToArchive(trimmed);
    console.debug('sending posts', trimmed);

    return sendToBackground(UPLOAD_POSTS, trimmed);
  };
};

export default makeReporter;
