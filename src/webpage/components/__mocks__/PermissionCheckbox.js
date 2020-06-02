/* eslint-disable react/prop-types */
import React from 'react';

const PermissionCheckbox = ({ storageKey, disabled }) => (
  <input type="checkbox" id={storageKey} name="mocked-permission-checkbox" disabled={disabled} />
);

export default PermissionCheckbox;
