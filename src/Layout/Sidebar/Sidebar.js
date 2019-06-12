import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Badge, Nav, NavItem } from 'reactstrap';
import classNames from 'classnames';
import SidebarMinimizer from './SidebarMinimizer';

const items = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Breadcrumbs',
            url: '/base/breadcrumbs/ta',
            icon: 'icon-puzzle'
          }
        ]
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Dropdowns',
        url: '/base/dropdowns',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Jumbotrons',
        url: '/base/jumbotrons',
        icon: 'icon-puzzle'
      },
      {
        name: 'List groups',
        url: '/base/list-groups',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navs',
        url: '/base/navs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Paginations',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress Bar',
        url: '/base/progress-bar',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Button dropdowns',
        url: '/buttons/button-dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups',
        icon: 'icon-cursor'
      },
      {
        name: 'Social Buttons',
        url: '/buttons/social-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell',
        label: {
          variant: 'info',
          class: 'ta'
        }
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'danger',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  }
];

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
        <i className={props.icon} />
        {props.name}
      </a>
      <ul className="nav-dropdown-items">{navList(props.children)}</ul>
    </li>
  );
};

const NavWithRo = withRouter(NavDropdown);

const NavLinkItem = item => {
  const { variant, icon, badge, url, name } = item;
  const classes = {
    item: classNames(item.class),
    link: classNames('nav-link', variant ? `nav-link-${variant}` : ''),
    icon: classNames(icon)
  };
  return (
    <NavItem className={classes.item}>
      <NavLink
        to={url || ''}
        className={classes.link}
        activeClassName="active"
        onClick={hideMobile}
      >
        <i className={classes.icon} />
        {name}
        {badge && <Badge color={badge.variant}>{badge.text}</Badge>}
      </NavLink>
    </NavItem>
  );
};

const navList = items => {
  return items.map(item => {
    return item.title ? (
      <li className="nav-title">{item.name}</li>
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
