import React from 'react';
import PropTypes from 'prop-types';

const Next = ({ pages, currentPage, onChange }) =>
  currentPage === pages ? (
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
        Next
      </a>
    </li>
  ) : (
    <li className="page-item">
      <a className="page-link" href="#" onClick={onChange}>
        Next
      </a>
    </li>
  );
Next.displayName = 'Next';

Next.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Next;
