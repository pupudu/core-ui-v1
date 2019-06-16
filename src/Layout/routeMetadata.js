const routeMetadata = [
  {
    name: 'Home',
    url: '/',
    icon: '🏠',
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
        icon: '🍞'
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: '🎨'
      }
    ]
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

const accountMetadata = [
  {
    name: 'Account',
    url: '/account',
    icon: '🔥'
  },
  {
    title: 'Theme'
  },
  {
    name: 'Payments',
    url: '/account/payments',
    icon: '💵'
  },
  {
    name: 'Invoices',
    url: '/account/invoices',
    icon: '⚖️ '
  }
];

const getRouteNames = list => {
  const names = {};

  list.forEach(item => {
    names[item.url] = item.name;
    if (item.children) {
      const childNames = getRouteNames(item.children);
      Object.assign(names, childNames);
    }
  });

  return names;
};

export const routeNames = getRouteNames([...routeMetadata, ...accountMetadata]);

export function getMetadata() {
  return window.location.pathname.includes('account')
    ? accountMetadata
    : routeMetadata;
}
