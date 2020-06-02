import defaultLocale from 'common/defaultLocale';
import { getPreference, savePreference } from 'common/storage/preference';
import { PREF_LANGUAGE, PREF_COUNTRY } from 'common/keys';

const setLocaleDefaults = async () => {
  const [lCode, cCode] = await Promise.all([
    getPreference(PREF_LANGUAGE),
    getPreference(PREF_COUNTRY)
  ]);

  const { languageCode, countryCode } = defaultLocale();

  const promises = [];
  if (!lCode) promises.push(savePreference(PREF_LANGUAGE, languageCode));
  if (!cCode) promises.push(savePreference(PREF_COUNTRY, countryCode));
  await Promise.all(promises);
};

export default setLocaleDefaults;
