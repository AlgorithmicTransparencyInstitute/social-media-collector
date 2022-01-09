import React, { Fragment } from 'react';

import LocalePreferences from 'common/components/LocalePreferences';
import PermissionCheckbox from 'webpage/components/PermissionCheckbox';
import Deck from 'webpage/components/Deck';
import Card from 'webpage/components/Card';

import * as KEYS from 'common/keys';
import {
  GENERAL_PERMISSION_KEYS,
  FACEBOOK_PERMISSION_KEYS,
  YOUTUBE_PERMISSION_KEYS
} from 'common/constants';

const PERMISSIONS = JSON.parse(process.env.PERMISSIONS);

const makePref = (acc, elem) => {
  const key = KEYS[elem];
  const pref = PERMISSIONS[elem];
  if (key && pref) acc[key] = pref;
  return acc;
};

const GENERAL_PERMISSIONS = GENERAL_PERMISSION_KEYS.reduce(makePref, {});
const FACEBOOK_PERMISSIONS = FACEBOOK_PERMISSION_KEYS.reduce(makePref, {});
const YOUTUBE_PERMISSIONS = YOUTUBE_PERMISSION_KEYS.reduce(makePref, {});

const checkboxen = (perms, props) => {
  return Object.keys(perms).map(perm => {
    const hintText = chrome.i18n.getMessage(perm + '_hintText'); // perms[perm].hintText
    const label = chrome.i18n.getMessage(perm + '_label'); // perms[perm].label
    return (
      <PermissionCheckbox
        key={perm}
        storageKey={perm}
        label={label}
        hintText={hintText}
        defaultValue={perms[perm].defaultValue}
        {...props}
      />
    );
  });
};

const YOUTUBE_ASK = () => (
  <div>
    <p>
      Politicians, dark money groups and scammers use YouTube ads too. But we have even less
      understanding of what they&apos;re saying and <i>how</i> they&apos;re target their ads.
      Google&apos;s transparency tools are even worse than Facebook&apos;s! We built a version of
      the Facebook Political Ad Collector that also lets you share YouTube ads.
      <br />
      <br />
      Would you be willing to help out? You&apos;ll have to install a new version of this extension
      by going to <a href="https://www.adobserver.org">AdObserver.org</a> and following the
      directions there. It lets you share the the ads and recommendations you see on YouTube, in
      addition to ads from Facebook too.
      <br />
      <br />
      Thanks!
    </p>
  </div>
);

const CARDS = {
  locale: {
    title: chrome.i18n.getMessage('prefs_8'),
    subtitle: chrome.i18n.getMessage('prefs_9')
  },
  general: {
    title: chrome.i18n.getMessage('prefs_2'),
    subtitle: chrome.i18n.getMessage('prefs_3'),
    permissions: GENERAL_PERMISSIONS
  },
  facebook: {
    title: chrome.i18n.getMessage('prefs_4'),
    subtitle: chrome.i18n.getMessage('prefs_5'),
    permissions: FACEBOOK_PERMISSIONS
  },
  youtube: {
    title: chrome.i18n.getMessage('prefs_6'),
    subtitle: chrome.i18n.getMessage('prefs_7'),
    permissions: YOUTUBE_PERMISSIONS
  },
  legacy: {
    title: 'Help us monitor YouTube ads too',
    subtitle: <YOUTUBE_ASK />,
    permissions: []
  }
};

const makeCard = (key, content) => (
  <Card title={CARDS[key].title} subtitle={CARDS[key].subtitle}>
    {content || checkboxen(CARDS[key].permissions)}
  </Card>
);

// no need for a ConsentAwareView as this page is not visible unless you
// have granted latest consent.
const ytCard = process.env.INCLUDE_YOUTUBE ? makeCard('youtube') : makeCard('legacy', '');
const PreferencesPage = () => (
  <Fragment>
    <h4 className="mt-4">{chrome.i18n.getMessage('prefs_0')}</h4>
    <p>{chrome.i18n.getMessage('prefs_1')}</p>
    <div>
      <Deck>
        {makeCard('general')}
        {makeCard('locale', <LocalePreferences />)}
      </Deck>
    </div>
    <div className="mt-4">
      <Deck>
        {makeCard('facebook')}
        {ytCard}
      </Deck>
    </div>
    <footer
      className="mt-4"
      dangerouslySetInnerHTML={{ __html: process.env.PREFERENCES_PAGE_FOOTER }}
    />
  </Fragment>
);
PreferencesPage.displayName = 'PreferencesPage';

export default PreferencesPage;
