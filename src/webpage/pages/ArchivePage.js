import React, { Fragment } from 'react';
import ConsentAwareView from 'common/components/ConsentAwareView';
import Archive from '../components/Archive';
import I18n from 'common/i18n';

const ArchivePage = () => (
  <Fragment>
    <header>
      <h1>{I18n('archive', 0)}</h1>
    </header>
    <ConsentAwareView whenGrantedIs="none">
      <p className="introduction">
        You need to accept the terms and conditions before you can view your archive.
      </p>
      <a href="#terms">View and accept terms and conditions</a>
    </ConsentAwareView>
    <ConsentAwareView whenGrantedIs="old">
      <p className="introduction">
        You need to accept the updated terms and conditions before you can view your archive.
      </p>
      <a href="#terms">View and accept updated terms and conditions</a>
    </ConsentAwareView>
    <ConsentAwareView whenGrantedIs="current">
      <Archive />
    </ConsentAwareView>
  </Fragment>
);
ArchivePage.displayName = 'ArchivePage';

export default ArchivePage;
