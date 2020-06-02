import React from 'react';
import PropTypes from 'prop-types';

import Previous from './pagination/Previous';
import Next from './pagination/Next';
import Page from './pagination/Page';

/* istanbul ignore next */
const insertPages = (pages, currentPage, onChange) => {
  const result = [];
  for (let i = 1; i <= pages; i++) {
    result.push(<Page key={i} page={i} currentPage={currentPage} onChange={onChange(i)} />);
  }
  return result;
};

/* istanbul ignore next */
const Pagination = ({ pages, currentPage, onChange }) => {
  if (pages <= 1) return null;

  const changePage = page => () => {
    onChange(page);
  };

  return (
    <nav arial-label="Archive Pagination">
      <ul className="pagination justify-content-center">
        <Previous currentPage={currentPage} onChange={changePage(currentPage - 1)} />
        {insertPages(pages, currentPage, changePage)}
        <Next pages={pages} currentPage={currentPage} onChange={changePage(currentPage + 1)} />
      </ul>
    </nav>
  );
};
Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Pagination;
