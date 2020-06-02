import getInstallationId from 'background/utils/getInstallationId';
import * as preference from 'common/storage/preference';
import * as permission from 'common/storage/permission';
import * as consent from 'common/storage/consent';

import { EXTENSION_VERSION } from 'common/constants';

import makePayload from 'background/api/makePayload';

jest.mock('background/utils/getInstallationId');
jest.mock('common/storage/preference');
jest.mock('common/storage/permission');
jest.mock('common/storage/consent');

const installationId = 'abcd12345';
const countryCode = 'AU';
const languageCode = 'en';
const consentVersion = '1';
const extensionProviderId = process.env.PROVIDER_ID;

const posts = ['one', 'two'];

const cleanup = () => {
  getInstallationId.mockClear();
  consent.checkConsent.mockClear();
  preference.getPreference.mockReset();
  permission.checkPermission.mockReset();
};

let result;

beforeAll(() => {
  getInstallationId.mockResolvedValue(installationId);
  consent.checkConsent.mockResolvedValue(consentVersion);
});

describe('when everything is forbidden', () => {
  const expected = {
    metadata: {
      extensionProviderId,
      consentVersion,
      extensionVersion: EXTENSION_VERSION
    },
    items: posts
  };

  beforeAll(async () => {
    preference.getPreference.mockResolvedValueOnce(countryCode).mockResolvedValueOnce(languageCode);
    permission.checkPermission.mockResolvedValue(false);
    result = await makePayload(posts);
  });

  afterAll(cleanup);

  it('returns the expected object', () => {
    expect(result).toEqual(expected);
  });
});

describe('when nothing is forbidden', () => {
  const expected = {
    metadata: {
      extensionProviderId,
      consentVersion,
      extensionVersion: EXTENSION_VERSION,
      installationId,
      countryCode,
      languageCode
    },
    items: posts
  };

  beforeAll(async () => {
    preference.getPreference.mockResolvedValueOnce(countryCode).mockResolvedValueOnce(languageCode);
    permission.checkPermission.mockResolvedValue(true);
    result = await makePayload(posts);
  });

  afterAll(cleanup);

  it('returns the expected object', () => {
    expect(result).toEqual(expected);
  });
});
