import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faGlobe,
  faTransgenderAlt,
  faMapMarker,
  faDotCircle
} from '@fortawesome/free-solid-svg-icons';

const REASONS = {
  WAISTUICustomAudienceType: {
    name: 'Custom Audience',
    icon: faUsers
  },
  WAISTUILocaleType: {
    name: 'Locale',
    icon: faGlobe
  },
  WAISTUIAgeGenderType: {
    name: 'Age and Gender',
    icon: faTransgenderAlt
  },
  WAISTUILocationType: {
    name: 'Location',
    icon: faMapMarker
  }
};

const Reason = ({ reason }) =>
  REASONS[reason] ? (
    <div className="reason badge badge-primary">
      <FontAwesomeIcon icon={REASONS[reason].icon} />
      <span className="reason-name">{REASONS[reason].name}</span>
    </div>
  ) : (
    <div className="reason badge badge-primary">
      <FontAwesomeIcon icon={faDotCircle} />
      <span className="reason-name">{reason}</span>
    </div>
  );

Reason.displayName = 'Reason';

Reason.propTypes = {
  reason: PropTypes.string.isRequired
};

export default Reason;
