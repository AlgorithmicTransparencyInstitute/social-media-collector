import React from 'react';
import PropTypes from 'prop-types';

import usePermission from 'common/hooks/usePermission';

const PermissionCheckbox = ({ storageKey, label, hintText, disabled, defaultValue }) => {
  const { checked, savePermission } = usePermission(storageKey, defaultValue);
  if (checked === null) return null;

  const disabledStyle = disabled ? ' disabled' : '';
  const inputStyle = 'form-check-input' + disabledStyle;
  const labelStyle = 'form-check-label' + disabledStyle;

  return (
    <div>
      <div className="form-check">
        <input
          type="checkbox"
          className={inputStyle}
          id={storageKey}
          name={storageKey}
          aria-label={label}
          checked={checked}
          disabled={disabled}
          onChange={savePermission}
        />
        <label title="" htmlFor={storageKey} className={labelStyle}>
          {label}
        </label>
      </div>
      <p className="small">{hintText}</p>
    </div>
  );
};
PermissionCheckbox.displayName = 'PermissionCheckbox';

PermissionCheckbox.propTypes = {
  storageKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.bool
};

PermissionCheckbox.defaultProps = {
  disabled: false,
  defaultValue: true
};

export default PermissionCheckbox;
