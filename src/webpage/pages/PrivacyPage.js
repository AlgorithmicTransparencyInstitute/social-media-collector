import React, { Fragment } from 'react';

const PrivacyPage = () => (
  <Fragment>
    <header>
      <h1>Privacy</h1>
    </header>
    <div dangerouslySetInnerHTML={{ __html: process.env.PRIVACY_TEXT }} />
  </Fragment>
);
PrivacyPage.displayName = 'PrivacyPage';

export default PrivacyPage;
