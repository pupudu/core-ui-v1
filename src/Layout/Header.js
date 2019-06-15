import React from 'react';
import { NavbarToggler, NavbarBrand } from 'reactstrap';
import { asideToggle, mobileSidebarToggle, sidebarToggle } from './handlers';
import logo from '../img/logo.png';

function Header() {
  return (
    <header className="app-header navbar">
      <NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
      <NavbarBrand href="#">
        <img src={logo} alt="navbar-brand" />
      </NavbarBrand>
      <NavbarToggler className="d-md-down-none mr-auto" onClick={sidebarToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
      <NavbarToggler className="d-md-down-none" onClick={asideToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
    </header>
  );
}

export default Header;
