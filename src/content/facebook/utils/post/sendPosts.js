import { sendToBackground } from 'messaging';
import { UPLOAD_POSTS } from 'common/actions';
import datesToISO from 'common/utils/datesToISO';

import { loadArchiveIndex, addItemsToArchive } from 'common/storage/archive';
import trimPost from './trimPost';

/**
 *  Sends the posts to the background.
 *
 *  @param posts — The array of posts to send.
 */
export const sendPosts = async posts => {
  if (!Array.isArray(posts) || !posts.length) return;
  const existing = await loadArchiveIndex();

  const trimmed = posts.map(trimPost).filter(({ id }) => !existing.includes(id));

  if (!trimmed.length) return;

  await addItemsToArchive(trimmed);
  return sendToBackground(UPLOAD_POSTS, trimmed.map(datesToISO));
};

export default sendPosts;
