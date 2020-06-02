import * as consent from 'common/storage/consent';

import getConsentWithTimestamp from 'common/utils/getConsentWithTimestamp';

jest.mock('common/storage/consent');

const acceptedAt = new Date().getTime();
const granted = 2;

let result;

beforeAll(async () => {
  consent.checkConsent.mockResolvedValue(granted);
  consent.getConsentAcceptedAt.mockResolvedValue(acceptedAt);
  result = await getConsentWithTimestamp();
});

it('called checkConsent', () => {
  expect(consent.checkConsent).toHaveBeenCalled();
});

it('called getConsentAcceptedAt', () => {
  expect(consent.getConsentAcceptedAt).toHaveBeenCalled();
});

it('returned the expected values', () => {
  expect(result).toEqual({ granted, acceptedAt });
});
