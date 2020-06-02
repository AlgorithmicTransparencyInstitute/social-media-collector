import { CONSENT } from 'common/keys';
import { onChangedKey } from 'common/storage';
import { checkConsent } from 'common/storage/consent';

import getInstallationId from '../utils/getInstallationId';
import updateBadge from './updateBadge';
import setLocaleDefaults from './setLocaleDefaults';

export const start = async () => {
  await setLocaleDefaults();

  const [granted, id] = await Promise.all([checkConsent(), getInstallationId()]);

  await updateBadge(granted);
  onChangedKey(CONSENT, updateBadge);
  console.debug('started', id);
};
