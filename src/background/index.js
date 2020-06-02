import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { start as startMessaging } from 'messaging';
import { start as startUi } from './ui';
import { start as startVersioning } from './versioning';
import registerUploadListener from './utils/registerUploadListener';

// exported for testing purposes
export const start = async () => {
  await startVersioning();
  startMessaging();
  registerUploadListener();
  await startUi();
};

/* istanbul ignore next */
document.addEventListener('DOMContentLoaded', start);
