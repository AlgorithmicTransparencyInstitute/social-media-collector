import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ page, currentPage, onChange }) =>
  page === currentPage ? (
    <li className="page-item disabled">
      <a className="page-link" href="#">
        {page}
      </a>
    </li>
  ) : (
    <li className="page-item">
      <a className="page-link" href="#" onClick={onChange}>
        {page} <span className="sr-only">(current)</span>
      </a>
    </li>
  );
Page.displayName = 'Page';

Page.propTypes = {
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Page;
