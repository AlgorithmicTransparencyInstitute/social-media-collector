/* eslint-disable react/prop-types */
import React from 'react';

const ChooseFilter = ({ filter, onChange }) => (
  <input name="choose-filter" value={filter} onChange={onChange} />
);

export default ChooseFilter;
