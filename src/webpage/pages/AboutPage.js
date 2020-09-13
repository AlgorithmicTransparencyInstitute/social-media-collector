import React, { Fragment } from 'react';

const AboutPage = () => (
  <Fragment>
    <header>
      <h1>About the {process.env.TITLE}</h1>
    </header>
    <div dangerouslySetInnerHTML={{ __html: process.env.ABOUT_TEXT }} />
  </Fragment>
);
AboutPage.displayName = 'AboutPage';

export default AboutPage;
