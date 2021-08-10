import React, { Fragment } from 'react';
import PreferenceSelector from './PreferenceSelector';
import { PREF_COUNTRY, PREF_LANGUAGE, PREF_AGE, PREF_GENDER } from 'common/keys';
import { COUNTRIES } from 'common/countries';
import { LANGUAGES } from 'common/languages';
import { AGES } from 'common/ages';
import { GENDERS } from 'common/genders';

const toArray = object => Object.keys(object).map(value => ({ value, text: object[value] }));

const LocalePreferences = () => (
  <Fragment>
    <PreferenceSelector
      options={toArray(COUNTRIES)}
      label={chrome.i18n.getMessage('prefs_10')}
      storageKey={PREF_COUNTRY}
    />
    <PreferenceSelector
      options={toArray(LANGUAGES)}
      label={chrome.i18n.getMessage('prefs_11')}
      storageKey={PREF_LANGUAGE}
    />
    <PreferenceSelector
      options={toArray(AGES)}
      label={chrome.i18n.getMessage('prefs_12')}
      storageKey={PREF_AGE}
    />
    <PreferenceSelector
      options={toArray(GENDERS)}
      label={chrome.i18n.getMessage('prefs_13')}
      storageKey={PREF_GENDER}
    />
  </Fragment>
);
LocalePreferences.displayName = 'Locale preferences';

export default LocalePreferences;
