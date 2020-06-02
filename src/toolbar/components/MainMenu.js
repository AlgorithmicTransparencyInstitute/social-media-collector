import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useArchive from 'common/hooks/useArchive';
import { makeItems } from 'common/utils/navigationUtils';
import { openPage } from 'common/utils/page';
import titleCase from 'common/utils/titleCase';

import icon from 'common/assets/icon128.png';

// add in icon later
const MenuItem = ({ label, badge, onClick }) => {
  const baseClasses = 'list-group-item list-group-item-action';

  if (isNaN(badge))
    return (
      <a href="#" className={baseClasses} onClick={onClick}>
        {label}
      </a>
    );

  const classes = baseClasses + ' d-flex justify-content-between align-items-center';
  return (
    <a href="#" className={classes} onClick={onClick}>
      {label}&nbsp;<span className="badge badge-primary">{badge}</span>
    </a>
  );
};
MenuItem.displayName = 'Menu item';

MenuItem.propTypes = {
  // icon: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  badge: PropTypes.number
};

MenuItem.defaultProps = {
  // icon: null,
  badge: NaN
};

const MainMenu = () => {
  const { index: archiveIndex, loading } = useArchive();
  // const { index: newsIndex } = useNews();

  const items = makeItems()({
    // news: { badge: undefined }, // not in use yet
    archive: { badge: loading ? undefined : archiveIndex.length }
  });

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={icon} height={30} width={30} className="d-inline-block align-top" />
          <span className="pl-2">{process.env.TITLE}</span>
        </a>
      </nav>
      <div className="list-group">
        {Object.keys(items).map(name => (
          <MenuItem
            key={name}
            label={items[name].label || titleCase(name)}
            badge={items[name].badge}
            onClick={openPage(name)}
          />
        ))}
      </div>
    </Fragment>
  );
};
MainMenu.displayName = 'Main menu';

export default MainMenu;
