import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useConsent from 'common/hooks/useConsent';
import proceed from 'common/utils/proceed';

const ConsentAwareView = ({ children, whenGrantedIs, whenGrantedIsNot }) => {
  const { granted } = useConsent();

  return proceed(granted, whenGrantedIs, whenGrantedIsNot) ? <Fragment>{children}</Fragment> : null;
};
ConsentAwareView.displayName = 'Consent aware view';

ConsentAwareView.propTypes = {
  children: PropTypes.node.isRequired,
  whenGrantedIs: PropTypes.oneOf(['none', 'old', 'current']),
  whenGrantedIsNot: PropTypes.oneOf(['none', 'old', 'current'])
};

ConsentAwareView.defaultProps = {
  whenGrantedIs: null,
  whenGrantedIsNot: null
};

export default ConsentAwareView;
