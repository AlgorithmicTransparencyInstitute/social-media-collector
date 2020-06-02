import React from 'react';
import PropTypes from 'prop-types';

// import useArchive from 'common/hooks/useArchive';
import useNavigation from 'common/hooks/useNavigation';
import { makeItems } from 'common/utils/navigationUtils';
import titleCase from 'common/utils/titleCase';

// add badge and icon later.
const MenuItem = ({ label, active, onClick }) => {
  const classes =
    'list-group-item list-group-item-action ' + (active ? 'bg-light' : 'bg-dark text-light');

  return (
    <a href="#" className={classes} onClick={onClick}>
      {label}
    </a>
  );
};
MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
};

MenuItem.defaultProps = {
  active: false
};

// add badge and icon later.
const Navigation = () => {
  const { current, goto } = useNavigation();
  // const { index: archiveIndex = [] } = useArchive();
  // const { index: newsIndex } = useNews();

  const doGoto = key => () => {
    goto(key);
  };

  const items = makeItems()({
    // news: { badge: undefined }, // not in use yet
    // archive: { badge: archiveIndex.length }
  });

  return (
    <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush bg-dark">
        {Object.keys(items).map(name => (
          <MenuItem
            key={name}
            label={items[name].label || titleCase(name)}
            active={name === current}
            onClick={doGoto(name)}
          />
        ))}
      </div>
    </div>
  );
};
Navigation.displayName = 'Navigation';

export default Navigation;
