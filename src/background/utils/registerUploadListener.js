import { CS, BS } from 'messaging';
import { UPLOAD_POSTS } from 'common/actions';
import { registerListener } from 'messaging/registry';
import { uploadObservation } from 'background/api';

const registerUploadListener = () => {
  registerListener(CS, BS, UPLOAD_POSTS, uploadObservation);
};

export default registerUploadListener;
