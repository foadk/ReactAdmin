export default {
  items: [
    {
      title: true,
      name: 'مدیریت اطلاعات پایه',
      wrapper: {
        element: '',
        attributes: {}
      },
      class: '',
      permissions: ['admin.users.datatable', 'admin.users.create',
        'admin.news.datatable', 'admin.news.create',
      ],
    },
    {
      name: 'داشبورد',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'کاربران',
      url: '/users',
      icon: 'icon-people',
      permissions: ['admin.users.datatable', 'admin.users.create'],
      children: [
        {
          name: 'مشاهده کاربران',
          url: '/users',
          icon: 'icon-eye',
          permissions: ['admin.users.datatable']
        },
        {
          name: 'افزودن کاربر',
          url: '/users/add',
          icon: 'icon-plus',
          permissions: ['admin.users.create'],
        }
      ]
    },
    {
      name: 'اخبار',
      url: '/news',
      // icon:'icon-people',
      permissions: ['admin.news.datatable', 'admin.news.create'],
      children: [
        {
          name: 'مشاهده اخبار',
          url: '/news',
          icon: 'icon-eye',
          permissions: ['admin.news.datatable'],
        },
        {
          name: 'افزودن خبر',
          url: '/news/add',
          icon: 'icon-plus',
          permissions: ['admin.news.create'],
        }
      ]
    },
    {
      title: true,
      name: 'مدیران و سطوح دسترسی',
      wrapper: {
        element: '',
        attributes: {}
      },
      class: '',
      permissions: ['admin.permissions.datatable', 'admin.permissions.create',
        'admin.roles.datatable', 'admin.roles.create',
        'admin.admins.datatable', 'admin.admins.create'
      ],
    },
    {
      name: 'سطوح دسترسی',
      url: '/permissions',
      icon: 'fa fa-ban',
      permissions: ['admin.permissions.datatable', 'admin.permissions.create'],
      children: [
        {
          name: 'مشاهده سطوح دسترسی',
          url: '/permissions',
          icon: 'icon-eye',
          permissions: ['admin.permissions.datatable'],
        },
        {
          name: 'افزودن سطح دسترسی',
          url: '/permissions/add',
          icon: 'icon-plus',
          permissions: ['admin.permissions.create'],
        }
      ]
    },
    {
      name: 'گروه های کاربری',
      url: '/roles',
      icon: 'fa fa-users',
      permissions: ['admin.roles.datatable', 'admin.roles.create'],
      children: [
        {
          name: 'مشاهده گروه های کاربری',
          url: '/roles',
          icon: 'icon-eye',
          permissions: ['admin.roles.datatable'],
        },
        {
          name: 'افزودن گروه کاربری',
          url: '/roles/add',
          icon: 'icon-plus',
          permissions: ['admin.roles.create'],
        }
      ]
    },
    {
      name: 'مدیران',
      url: '/admins',
      icon: 'fa fa-users',
      permissions: ['admin.admins.datatable', 'admin.admins.create'],
      children: [
        {
          name: 'مشاهده مدیران',
          url: '/admins',
          icon: 'icon-eye',
          permissions: ['admin.admins.datatable'],
        },
        {
          name: 'افزودن مدیر',
          url: '/admins/add',
          icon: 'icon-plus',
          permissions: ['admin.admins.create'],
        }
      ]
    },
    {
      title: true,
      name: 'تم',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'رنگ ها',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'تایپوگرافی',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'کامپوننت ها',
      wrapper: {
        element: '',
        attributes: {},
      },
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
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'divider1',
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
    },
  ],
};
