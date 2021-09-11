import React, { Fragment, useEffect } from 'react';
import ConsentAwareView from 'common/components/ConsentAwareView';
import GrantConsentButton from 'common/components/GrantConsentButton';
import useConsent from 'common/hooks/useConsent';

const TermsPage = () => {
  const { viewedConsent } = useConsent();

  useEffect(() => {
    /* istanbul ignore else */
    viewedConsent();
  }, []);

  return (
    <Fragment>
      <header>
        <h1>{chrome.i18n.getMessage('terms_5')}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: chrome.i18n.getMessage('terms_html') }} />
      <ConsentAwareView whenGrantedIs="none">
        <p>{chrome.i18n.getMessage('terms_2')}</p>
        <GrantConsentButton label={chrome.i18n.getMessage('terms_0')} to="preferences" />
      </ConsentAwareView>
      <ConsentAwareView whenGrantedIs="old">
        <p>{chrome.i18n.getMessage('terms_3')}</p>
        <GrantConsentButton label={chrome.i18n.getMessage('terms_1')} to="preferences" />
      </ConsentAwareView>
      <ConsentAwareView whenGrantedIs="current">
        <p>{chrome.i18n.getMessage('terms_4')}</p>
      </ConsentAwareView>
    </Fragment>
  );
};
TermsPage.displayName = 'TermsPage';

export default TermsPage;
