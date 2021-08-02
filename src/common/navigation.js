import {
  // faGlobe,
  // faShareAlt,
  faInfoCircle,
  faArchive,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import I18n from 'common/i18n';

export const ITEMS = {
  archive: { icon: faArchive, label: I18n('nav', 0), badge: 0 },
  preferences: { label: I18n('nav', 4), icon: faCog },
  about: { label: I18n('nav', 3), icon: faInfoCircle },
  // news: { icon: faGlobe, badge: 0 },
  // share: { icon: faShareAlt },
  privacy: { label: I18n('nav', 1) },
  terms: { label: I18n('nav', 2) }
  // help: {}
};
