import React from 'react';
import { Link } from '@reach/router';
import { Badge, Nav, NavItem } from 'reactstrap';
import classNames from 'classnames';
import { sidebarMinimize } from '../handlers';
import items from './metadata';

const handleClick = e => {
  e.preventDefault();
  e.target.parentElement.classList.toggle('open');
};

const activeRoute = routeName => {
  return window.location.pathname.indexOf(routeName) > -1
    ? 'nav-item nav-dropdown open'
    : 'nav-item nav-dropdown';
};

const hideMobile = () => {
  if (document.body.classList.contains('sidebar-mobile-show')) {
    document.body.classList.toggle('sidebar-mobile-show');
  }
};

const Icon = props => {
  return <i style={{ fontStyle: 'normal' }}>{props.children}</i>;
};

const SidebarMinimizer = () => (
  <button
    className="sidebar-minimizer"
    type="button"
    onClick={sidebarMinimize}
  />
);

const NavDropdown = props => {
  return (
    <li className={activeRoute(props.url)}>
      <a
        className="nav-link nav-dropdown-toggle"
        href="http://ta"
        onClick={handleClick}
      >
        <Icon>{props.icon}</Icon>
        {props.name}
      </a>
      <ul className="nav-dropdown-items">{navList(props.children)}</ul>
    </li>
  );
};

const NavLinkItem = item => {
  const { variant, icon, badge, url, name } = item;
  const linkClass = classNames(
    'nav-link',
    variant ? `nav-link-${variant}` : ''
  );
  return (
    <NavItem>
      <Link
        to={`${url}` || ''}
        className={linkClass}
        activeClassName="active"
        onClick={hideMobile}
      >
        <Icon>{icon}</Icon>
        {name}
        {badge && <Badge color={badge.variant}>{badge.text}</Badge>}
      </Link>
    </NavItem>
  );
};

const GenericItem = props => {
  const { title, divider, children } = props;
  return title ? (
    <li className="nav-title">{title}</li>
  ) : divider ? (
    <li className="divider" />
  ) : children ? (
    <NavDropdown {...props} />
  ) : (
    <NavLinkItem {...props} />
  );
};

const navList = items => {
  return items.map((item, idx) => <GenericItem {...item} key={idx} />);
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Nav>{navList(items)}</Nav>
      </nav>
      <SidebarMinimizer />
    </div>
  );
};

export default Sidebar;
