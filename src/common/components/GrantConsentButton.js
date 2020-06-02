import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import useConsent from 'common/hooks/useConsent';
import useNavigation from 'common/hooks/useNavigation';

const GrantConsentButton = ({ label, to }) => {
  const { granted, saveConsent } = useConsent();
  const { goto } = useNavigation();

  const saveAndGo = () => {
    saveConsent();
    if (to) goto(to);
  };

  return granted === null || granted === 'current' ? null : (
    <Button variant="primary" onClick={saveAndGo} label={label} />
  );
};
GrantConsentButton.displayName = 'Grant aware button';

GrantConsentButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string
};

GrantConsentButton.defaultProps = {
  to: null
};

export default GrantConsentButton;
