import React, { Fragment } from 'react';
import I18n from 'common/i18n';

const PrivacyPage = () => (
  <Fragment>
    <header>
      <h1>{I18n('privacy', 0)}</h1>
    </header>
    <div dangerouslySetInnerHTML={{ __html: process.env.PRIVACY_TEXT }} />
  </Fragment>
);
PrivacyPage.displayName = 'PrivacyPage';

export default PrivacyPage;
