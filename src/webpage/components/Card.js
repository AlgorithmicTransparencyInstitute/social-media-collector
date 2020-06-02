import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, subtitle, children }) => (
  <div className="card">
    {title && <div className="card-header">{title}</div>}
    <div className="card-body">
      {subtitle && <div className="small mb-3">{subtitle}</div>}
      <div className="mt-3">{children}</div>
    </div>
  </div>
);
Card.displayName = 'Card';

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  title: null,
  subtitle: null
};

export default Card;
