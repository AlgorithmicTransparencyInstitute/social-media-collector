import defaultLocale from 'common/defaultLocale';
import * as preference from 'common/storage/preference';

import { PREF_LANGUAGE, PREF_COUNTRY } from 'common/keys';

import setLocaleDefaults from 'background/ui/setLocaleDefaults';

jest.mock('common/defaultLocale');
jest.mock('common/storage/preference');

const cleanup = () => {
  preference.savePreference.mockClear();
  preference.getPreference.mockReset();
  defaultLocale.mockReset();
};

describe('when there is a language and country code already', () => {
  beforeAll(async () => {
    preference.getPreference.mockResolvedValueOnce('en').mockResolvedValueOnce('GB');
    defaultLocale.mockReturnValue({ languageCode: 'en', countryCode: 'GB' });
    await setLocaleDefaults();
  });

  afterAll(cleanup);

  it('did not call savePreference', () => {
    expect(preference.savePreference).not.toHaveBeenCalled();
  });
});

describe('when there is no language or country code already', () => {
  beforeAll(async () => {
    preference.getPreference.mockResolvedValueOnce(null).mockResolvedValueOnce(null);
    defaultLocale.mockReturnValue({ languageCode: 'en', countryCode: 'GB' });
    preference.savePreference.mockResolvedValue();
    await setLocaleDefaults();
  });

  afterAll(cleanup);

  it('called savePreference with the country code', () => {
    expect(preference.savePreference).toHaveBeenCalledWith(PREF_COUNTRY, 'GB');
  });

  it('called savePreference with the language code', () => {
    expect(preference.savePreference).toHaveBeenCalledWith(PREF_LANGUAGE, 'en');
  });
});
