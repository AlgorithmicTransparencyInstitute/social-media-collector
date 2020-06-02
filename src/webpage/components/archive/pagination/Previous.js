import React from 'react';
import PropTypes from 'prop-types';

const Previous = ({ currentPage, onChange }) =>
  currentPage === 1 ? (
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
        Previous
      </a>
    </li>
  ) : (
    <li className="page-item">
      <a className="page-link" href="#" onClick={onChange}>
        Previous
      </a>
    </li>
  );
Previous.displayName = 'Previous';

Previous.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Previous;
