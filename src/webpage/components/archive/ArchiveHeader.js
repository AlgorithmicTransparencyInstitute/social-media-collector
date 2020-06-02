import React from 'react';
import PropTypes from 'prop-types';
import pluralise from 'pluralise';

const formatDate = date =>
  date.toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

const ArchiveHeader = ({ count, since }) => (
  <div className="mb-2">
    <div>This is an archive of the data this extension has collected from your social feeds.</div>
    <div className="small">
      You have {pluralise.withCount(count, '% item')} in your archive, collected since&nbsp;
      <span className="as-date">{formatDate(since)}</span>
    </div>
  </div>
);
ArchiveHeader.displayName = 'ArchiveHeader';

ArchiveHeader.propTypes = {
  count: PropTypes.number.isRequired,
  since: PropTypes.instanceOf(Date).isRequired
};

export default ArchiveHeader;
