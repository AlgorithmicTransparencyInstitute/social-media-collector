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
        <h1>Terms of Use</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: process.env.CONSENT_TEXT }} />
      <ConsentAwareView whenGrantedIs="none">
        <p>
          You need to accept the above terms and conditions before you can use the browser
          extension.
        </p>
        <GrantConsentButton label="I accept these terms and conditions" to="preferences" />
      </ConsentAwareView>
      <ConsentAwareView whenGrantedIs="old">
        <p>The above terms and conditions have been updated since you last agreed to them.</p>
        <GrantConsentButton label="I accept the updated terms and conditions" to="preferences" />
      </ConsentAwareView>
      <ConsentAwareView whenGrantedIs="current">
        <p>You accepted the above terms and conditions.</p>
      </ConsentAwareView>
    </Fragment>
  );
};
TermsPage.displayName = 'TermsPage';

export default TermsPage;
