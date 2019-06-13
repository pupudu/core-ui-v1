export default [
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
