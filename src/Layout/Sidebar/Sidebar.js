import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Badge, Nav, NavItem } from 'reactstrap';
import classNames from 'classnames';
import SidebarMinimizer from './SidebarMinimizer';

const items = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: '🔥',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: '💅'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: '📝'
  },
  {
    title: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: '🎨',
    children: [
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs',
        icon: '📦',
        children: [
          {
            name: 'Breadcrumbs',
            url: '/base/breadcrumbs/ta',
            icon: '🍞'
          }
        ]
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: '🎨'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: '🎨'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: '🎨'
      },
      {
        name: 'Dropdowns',
        url: '/base/dropdowns',
        icon: '🎨'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: '🎨'
      },
      {
        name: 'Jumbotrons',
        url: '/base/jumbotrons',
        icon: '🎨'
      },
      {
        name: 'List groups',
        url: '/base/list-groups',
        icon: '🎨'
      },
      {
        name: 'Navs',
        url: '/base/navs',
        icon: '🎨'
      },
      {
        name: 'Paginations',
        url: '/base/paginations',
        icon: '🎨'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: '🎨'
      },
      {
        name: 'Progress Bar',
        url: '/base/progress-bar',
        icon: '🎨'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: '🎨'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: '🎨'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: '🎨'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: '🎨'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: '⏯',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: '▶️'
      },
      {
        name: 'Button dropdowns',
        url: '/buttons/button-dropdowns',
        icon: '⬇️'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups',
        icon: '⏯'
      },
      {
        name: 'Social Buttons',
        url: '/buttons/social-buttons',
        icon: '🚻'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: '📊'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: '🏵',
    children: [
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: '🇱🇰',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: '♣️'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: '🔔',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: '📢'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: '🛡'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: '🗯'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: '📟',
    badge: {
      variant: 'danger',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: 'Extras'
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: '🗒',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: '🔐'
      },
      {
        name: 'Register',
        url: '/register',
        icon: '🔏'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: '🤷'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: '🤦'
      }
    ]
  }
];

const Icon = props => {
  return <i style={{ fontStyle: 'normal' }}>{props.children}</i>;
};

const handleClick = e => {
  e.preventDefault();
  e.target.parentElement.classList.toggle('open');
};

const activeRoute = (routeName, location) => {
  return location.pathname.indexOf(routeName) > -1
    ? 'nav-item nav-dropdown open'
    : 'nav-item nav-dropdown';
};

const hideMobile = () => {
  if (document.body.classList.contains('sidebar-mobile-show')) {
    document.body.classList.toggle('sidebar-mobile-show');
  }
};

const NavDropdown = props => {
  return (
    <li className={activeRoute(props.url, props.location)}>
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

const NavWithRo = withRouter(NavDropdown);

const NavLinkItem = item => {
  const { variant, icon, badge, url, name } = item;
  const linkClass = classNames(
    'nav-link',
    variant ? `nav-link-${variant}` : ''
  );
  return (
    <NavItem>
      <NavLink
        to={url || ''}
        className={linkClass}
        activeClassName="active"
        onClick={hideMobile}
      >
        <Icon>{icon}</Icon>
        {name}
        {badge && <Badge color={badge.variant}>{badge.text}</Badge>}
      </NavLink>
    </NavItem>
  );
};

const navList = items => {
  return items.map(item => {
    return item.title ? (
      <li className="nav-title">{item.title}</li>
    ) : item.divider ? (
      <li className="divider" />
    ) : item.children ? (
      <NavWithRo {...item} />
    ) : (
      <NavLinkItem {...item} />
    );
  });
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
