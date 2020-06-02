import React from 'react';
import icon from 'common/assets/icon128.png';

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      <img src={icon} height={30} width={30} className="d-inline-block align-top" />
      <span className="pl-2">
        <strong>{process.env.TITLE}</strong>
      </span>
    </a>
  </nav>
);
Header.displayName = 'Header';

export default Header;
