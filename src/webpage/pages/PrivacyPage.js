import React, { Fragment } from 'react';

const PrivacyPage = () => (
  <Fragment>
    <header>
      <h1>{chrome.i18n.getMessage('privacy_0')}</h1>
    </header>
    <div dangerouslySetInnerHTML={{ __html: chrome.i18n.getMessage('privacy_html') }} />
  </Fragment>
);
PrivacyPage.displayName = 'PrivacyPage';

export default PrivacyPage;
