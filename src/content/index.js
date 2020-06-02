import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { isFacebook, isYouTube } from 'common/utils/hosts';
import { start as startFbFeedScanner } from 'content/facebook/feedScanner';
import { start as startYtAdScanner } from 'content/youtube';

// exported for testing purposes
export const start = () => {
  if (isFacebook()) startFbFeedScanner();
  else if (isYouTube()) startYtAdScanner();

  console.debug('started');
};

/* istanbul ignore next */
document.addEventListener('DOMContentLoaded', start);
