import { CONSENT } from 'common/keys';
import getInstallationId from 'background/utils/getInstallationId';
import * as storage from 'common/storage';
import * as consent from 'common/storage/consent';
import updateBadge from 'background/ui/updateBadge';
import setLocaleDefaults from 'background/ui/setLocaleDefaults';

import { start } from 'background/ui';

jest.mock('background/utils/getInstallationId');
jest.mock('background/ui/updateBadge');
jest.mock('background/ui/setLocaleDefaults');
jest.mock('common/storage');
jest.mock('common/storage/consent');

const granted = true;
const id = 12345;

const cleanup = () => {
  console.debug.mockClear();
  setLocaleDefaults.mockClear();
};

beforeAll(async () => {
  setLocaleDefaults.mockResolvedValue();
  getInstallationId.mockResolvedValue(id);
  updateBadge.mockResolvedValue();
  consent.checkConsent.mockResolvedValue(granted);
  storage.onChangedKey.mockReturnValue();

  await start();
});

afterAll(cleanup);

it('called setLocaleDefaults', () => {
  expect(setLocaleDefaults).toHaveBeenCalled();
});

it('called checkConsent', () => {
  expect(consent.checkConsent).toHaveBeenCalled();
});

it('called getInstallationId', () => {
  expect(getInstallationId).toHaveBeenCalled();
});

it('called updateBadge with granted', () => {
  expect(updateBadge).toHaveBeenCalledWith(granted);
});

it('called onChangedKey with CONSENT and updateBadge', () => {
  expect(storage.onChangedKey).toHaveBeenCalledWith(CONSENT, updateBadge);
});
