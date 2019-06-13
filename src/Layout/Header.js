import React from 'react';
import { NavbarToggler, NavbarBrand } from 'reactstrap';

function sidebarToggle(e) {
  e.preventDefault();
  document.body.classList.toggle('sidebar-hidden');
}

function mobileSidebarToggle(e) {
  e.preventDefault();
  document.body.classList.toggle('sidebar-mobile-show');
}

function asideToggle(e) {
  e.preventDefault();
  document.body.classList.toggle('aside-menu-hidden');
}

function Header() {
  return (
    <header className="app-header navbar">
      <NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
      <NavbarBrand href="#" />
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
