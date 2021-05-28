import React, { Fragment, useEffect } from 'react';
import ConsentAwareView from 'common/components/ConsentAwareView';
import GrantConsentButton from 'common/components/GrantConsentButton';
import useConsent from 'common/hooks/useConsent';
import I18n from 'common/i18n';

const TermsPage = () => {
  const { viewedConsent } = useConsent();

  useEffect(() => {
    /* istanbul ignore else */
    viewedConsent();
  }, []);

  return (
    <Fragment>
      <header>
        <h1>{I18n('terms', 5)}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: process.env.CONSENT_TEXT }} />
      <ConsentAwareView whenGrantedIs="none">
        <p>{I18n('terms', 2)}</p>
        <GrantConsentButton label={I18n('terms', 0)} to="preferences" />
      </ConsentAwareView>
      <ConsentAwareView whenGrantedIs="old">
        <p>{I18n('terms', 3)}</p>
        <GrantConsentButton label={I18n('terms', 1)} to="preferences" />
      </ConsentAwareView>
      <ConsentAwareView whenGrantedIs="current">
        <p>{I18n('terms', 4)}</p>
      </ConsentAwareView>
    </Fragment>
  );
};
TermsPage.displayName = 'TermsPage';

export default TermsPage;
