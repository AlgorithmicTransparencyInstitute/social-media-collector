import React, { Fragment } from 'react';

const HelpPage = () => (
  <Fragment>
    <header>
      <h1>{process.env.TITLE} Help</h1>
    </header>
    <div dangerouslySetInnerHTML={{ __html: process.env.HELP_TEXT }} />
  </Fragment>
);
HelpPage.displayName = 'HelpPage';

export default HelpPage;
