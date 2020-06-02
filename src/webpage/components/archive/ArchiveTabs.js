import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ count }) =>
  isNaN(count) ? null : <span className="badge badge-primary ml-2">{count}</span>;

Badge.propTypes = {
  count: PropTypes.number
};

Badge.defaultProps = {
  count: NaN
};

const Tab = ({ label, badge, active, onSelect }) => {
  const classes = 'btn border align-items-center ' + (active ? 'btn-light' : 'btn-secondary');

  return (
    <button type="button" className={classes} onClick={onSelect}>
      {label}
      <Badge count={badge} />
    </button>
  );
};
Tab.displayName = 'Tab';

Tab.propTypes = {
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  badge: PropTypes.number,
  active: PropTypes.bool
};
Tab.defaultProps = {
  badge: NaN,
  active: false
};

const ArchiveTabs = ({ tabs, onChange }) => {
  const switchTo = name => () => onChange(name);

  return (
    <div className="btn-group" role="group">
      {tabs.map(({ name, label, badge, active }) => (
        <Tab key={label} label={label} badge={badge} active={active} onSelect={switchTo(name)} />
      ))}
    </div>
  );
};

ArchiveTabs.propTypes = {
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      badge: PropTypes.number,
      active: PropTypes.bool
    })
  ).isRequired
};

export default ArchiveTabs;
