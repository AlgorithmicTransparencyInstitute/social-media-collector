import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'jest-webextension-mock';
import 'jest-localstorage-mock';

import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const jsdom = new JSDOM(`<!doctype html>
  <html>
  <body>
    <div id="root"></div>
  </body>
  </html>`);

const { window } = jsdom;

const copyProps = (src, target) => {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target)
  });
};

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function(id) {
  clearTimeout(id);
};

copyProps(window, global);

global.fetch = require('jest-fetch-mock');

global.console = {
  log: console.log,
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  time: jest.fn(),
  timeEnd: jest.fn()
};

// forces values set by Webpack when the app is actually built.
process.env.LANGUAGE = 'eng';
process.env.IS_DEBUG = 'true';
process.env.IS_FIREFOX = 'false';
process.env.IS_CHROME = 'true';
process.env.IS_QA = 'false';
process.env.PROVIDER_ID = 'ati';
process.env.EXTENSION_NAME = 'Test';
process.env.TITLE = 'Test Project';
process.env.API_URL = 'http://localhost:8000/';
process.env.CONSENT_VERSION = '3';
process.env.CONSENT_TEXT = '<p>I consent</p>';
process.env.HELP_TEXT = '<p>Help!</p>';
process.env.ABOUT_TEXT = '<p>About!</p>';
process.env.PRIVACY_TEXT = '<p>Privacy!</p>';
process.env.PERMISSIONS = JSON.stringify({
  SHOW_DEBUG_DATA: {
    label: 'Show Debug Data',
    hintText: 'Debugging information will be displayed',
    defaultValue: true
  },
  USER_SHARE_DIAGNOSTICS: {
    label: 'Share Diagnostic Data',
    hintText: 'If things go wrong we’ll send extra data to help us diagnose the problem',
    defaultValue: true
  },
  FB_SHARE_SPONSORED_POSTS: {
    label: 'Share Sponsored Posts',
    hintText: 'This allows the extension to collect all of the ads shown to you on Facebook',
    defaultValue: true
  },
  FB_SHOW_COLLECTION_STATUS: {
    label: 'Show Collection Status',
    hintText: 'If on this will tag your facebook post with collection info.',
    defaultValue: false
  },
  YT_SHARE_WATCHED_VIDEOS: {
    label: 'Share Watched Videos',
    hintText: 'This will share each video you choose to watch on YouTube'
  }
});
process.env.PREFERENCES_PAGE_FOOTER = '<p>Footy!</p>';
