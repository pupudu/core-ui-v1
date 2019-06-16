import React from 'react';
import { Link } from '@reach/router';
import { asideToggle, mobileSidebarToggle, sidebarToggle } from './handlers';
import logo from '../img/logo.png';

function Header() {
  return (
    <header className="app-header navbar">
      <button
        className="navbar-toggler d-lg-none"
        onClick={mobileSidebarToggle}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/">
        <div className="navbar-brand">
          <img src={logo} alt="navbar-brand" />
        </div>
      </Link>
      <button
        className="navbar-toggler d-md-down-none mr-auto"
        onClick={sidebarToggle}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <button className="navbar-toggler d-md-down-none" onClick={asideToggle}>
        <span className="navbar-toggler-icon" />
      </button>
    </header>
  );
}

export default Header;
