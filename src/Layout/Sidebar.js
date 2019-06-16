import React, { useState } from 'react';
import { Link } from '@reach/router';
import classNames from 'classnames';
import { sidebarMinimize, hideMobile } from './handlers';
import { getMetadata } from './routeMetadata';

const Icon = props => {
  return <i style={{ fontStyle: 'normal' }}>{props.children}</i>;
};

const NavDropdown = props => {
  const [open, setOpen] = useState(
    window.location.pathname.includes(props.url)
  );
  return (
    <li className={classNames('nav-item nav-dropdown', { open })}>
      <div
        className="nav-link nav-dropdown-toggle"
        onClick={() => setOpen(!open)}
      >
        <Icon>{props.icon}</Icon>
        {props.name}
      </div>
      <ul className="nav-dropdown-items">{navList(props.children)}</ul>
    </li>
  );
};

const NavLinkItem = item => {
  const { variant, icon, badge, url = '', name } = item;

  return (
    <div className="nav-item">
      <Link
        to={url}
        getProps={({ isCurrent }) => ({
          className: classNames({
            'nav-link': true,
            [`nav-link-${variant}`]: variant,
            active: isCurrent
          })
        })}
        onClick={hideMobile}
      >
        <Icon>{icon}</Icon>
        {name}
        {badge && (
          <div className={classNames('badge', `badge-${badge.variant}`)}>
            {badge.text}
          </div>
        )}
      </Link>
    </div>
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
        <div className="nav">{navList(getMetadata())}</div>
      </nav>
      <button className="sidebar-minimizer" onClick={sidebarMinimize} />
    </div>
  );
};

export default Sidebar;
