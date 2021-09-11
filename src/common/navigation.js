import {
  // faGlobe,
  // faShareAlt,
  faInfoCircle,
  faArchive,
  faCog
} from '@fortawesome/free-solid-svg-icons';

export const ITEMS = {
  archive: { icon: faArchive, label: chrome.i18n.getMessage('nav_0'), badge: 0 },
  preferences: { label: chrome.i18n.getMessage('nav_4'), icon: faCog },
  about: { label: chrome.i18n.getMessage('nav_3'), icon: faInfoCircle },
  // news: { icon: faGlobe, badge: 0 },
  // share: { icon: faShareAlt },
  privacy: { label: chrome.i18n.getMessage('nav_1') },
  terms: { label: chrome.i18n.getMessage('nav_2') }
  // help: {}
};
