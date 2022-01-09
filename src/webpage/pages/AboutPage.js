import React, { Fragment } from 'react';

const AboutPage = () => (
  <Fragment>
    <header>
      <h1>
        {chrome.i18n.getMessage('about_0')} {process.env.TITLE}
      </h1>
    </header>

    <div dangerouslySetInnerHTML={{ __html: chrome.i18n.getMessage('about_html') }} />
  </Fragment>
);
AboutPage.displayName = 'AboutPage';

export default AboutPage;
