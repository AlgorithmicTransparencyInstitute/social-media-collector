import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Boosted = ({ boosted }) =>
  boosted ? (
    <div className="btn btn-outline-success">
      <FontAwesomeIcon icon={faRocket} />
      Post was boosted
    </div>
  ) : null;

Boosted.displayName = 'Boosted';

Boosted.propTypes = { boosted: PropTypes.bool };

Boosted.defaultProps = { boosted: false };

export default Boosted;
