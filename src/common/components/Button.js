import React from 'react';
import PropTypes from 'prop-types';
import BButton from 'react-bootstrap/Button';

const openPage = to => {
  const base = 'webpage/index.html';
  const url = to ? `${base}#${to}` : base;
  const extensionUrl = chrome.runtime.getURL(url);

  /* istanbul ignore next */
  return () => {
    window.open(extensionUrl, '_blank');
  };
};

const Button = ({ type, label, to, variant, onClick }) => {
  const doClick = onClick || openPage(to);

  return type === 'link' ? (
    <a href="#" onClick={doClick}>
      {label}
    </a>
  ) : (
    <BButton variant={variant} block onClick={doClick}>
      {label}
    </BButton>
  );
};
Button.displayName = 'Button';

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.oneOf(['link', 'button']),
  to: PropTypes.string, // you must have either a 'to' or 'onClick'
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
    'dark',
    'link'
  ])
};

Button.defaultProps = {
  type: 'button',
  to: null,
  onClick: null,
  variant: undefined
};

export default Button;
