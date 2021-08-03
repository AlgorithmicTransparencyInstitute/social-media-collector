import React from 'react';
import PropTypes from 'prop-types';
import usePreference from 'common/hooks/usePreference';
import I18n from 'common/i18n';

const buildOptions = options =>
  options.map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

const PreferenceSelector = ({ label, options, storageKey }) => {
  const { selected = '', savePreference } = usePreference(storageKey);

  return (
    <div className="pt-3">
      <label className="form-label">{label}</label>
      <select id={storageKey} className="form-control" onChange={savePreference} value={selected}>
        <option value="">{I18n('prefselector', 0)}...</option>
        {buildOptions(options)}
      </select>
    </div>
  );
};
PreferenceSelector.displayName = 'Preference selector';

PreferenceSelector.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  storageKey: PropTypes.string.isRequired
};

export default PreferenceSelector;
