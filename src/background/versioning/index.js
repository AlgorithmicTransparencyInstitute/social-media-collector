import { openPage } from 'common/utils/page';
import {
  checkConsent,
  grantConsent,
  getConsentViewedAt,
  CURRENT_CONSENT_VERSION
} from 'common/storage/consent';

import isUpgradeFromGlobeAndMail from './isUpgradeFromGlobeAndMail';
import isUpgradeFrom2to3 from './isUpgradeFrom2to3';
import setDefaultGlobeAndMailPermissions from './setDefaultGlobeAndMailPermissions';
import setDefaultV3Permissions from './setDefaultV3Permissions';
import setAllDefaults from './setAllDefaults';
import tooSoon from './tooSoon';

// see also https://dev.to/gokatz/testing-install-and-update-flows-in-chrome-extensions-2e40

export const start = async () => {
  const version = await checkConsent();
  if (version === CURRENT_CONSENT_VERSION) return;

  if (isUpgradeFromGlobeAndMail(version)) {
    await Promise.all([setDefaultGlobeAndMailPermissions(), grantConsent(1)]);
  } else if (isUpgradeFrom2to3(version)) {
    await setDefaultV3Permissions();
  } else setAllDefaults();

  const viewedAt = await getConsentViewedAt();
  if (!tooSoon(viewedAt)) {
    const openTerms = openPage('terms');
    openTerms();
  }
};
