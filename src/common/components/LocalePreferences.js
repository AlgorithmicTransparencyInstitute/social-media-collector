import I18n from 'common/i18n';
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
      label={I18n('prefs', 10)}
      storageKey={PREF_COUNTRY}
    />
    <PreferenceSelector
      options={toArray(LANGUAGES)}
      label={I18n('prefs', 11)}
      storageKey={PREF_LANGUAGE}
    />
    <PreferenceSelector options={toArray(AGES)} label={I18n('prefs', 12)} storageKey={PREF_AGE} />
    <PreferenceSelector
      options={toArray(GENDERS)}
      label={I18n('prefs', 13)}
      storageKey={PREF_GENDER}
    />
  </Fragment>
);
LocalePreferences.displayName = 'Locale preferences';

export default LocalePreferences;
