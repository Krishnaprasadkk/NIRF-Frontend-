import { INavData } from '@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  {
    name: 'Parameters',
    title: true
  },
  {
    name: 'Teaching, Learning & Resources',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Student Strength including Ph.D. students',
        url: '/base/ss'
      },
      // {
      //   name: 'Breadcrumbs',
      //   url: '/base/breadcrumbs'
      // },
      {
    name:'Faculty-Student Ratio',
    url:'/base/fsr'
      },
      {
        name:'Faculty with PhD (or equivalent) and Experience',
        url:'base/fqe'
      },
      {
        name:'Financial Resources and their Utilisation',
        url:'base/fru'
      }
      // {
      //   name: 'Cards',
      //   url: '/base/cards'
      // },
      // {
      //   name: 'Carousel',
      //   url: '/base/carousel'
      // },
      // {
      //   name: 'Collapse',
      //   url: '/base/collapse'
      // },
      // {
      //   name: 'List Group',
      //   url: '/base/list-group'
      // },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination'
      // },
      // {
      //   name: 'Placeholder',
      //   url: '/base/placeholder'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress'
      // },
      // {
      //   name: 'Spinners',
      //   url: '/base/spinners'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips'
      // }
    ]
  },

  {
    name: 'Research and Professional Practice ',
    url: '/research',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name:'Combined metric for Publications',
        url:'/research/fppp'
      },
      {
name:"metric for publications",
url:'research/pu'
      },
      {
        name:'Qulaity of Publications',
        url:'research/qp'
      },
      {name:'Published and granted patents',
        url:'research/ipr',

      }





]
},
// {
//   name:'OUTREACH AND INCLUSITIVITY'
// ,
// url:'/outreach',
// iconComponent: { name: 'cil-cursor' },
// children:[
// {
//   name : 'REIGONAL-DIVERSITY',
// url:'/outreach/rd'

// },
// {
// name:'RD',
// url: 'outreach/reigonalDiversity'
// },
// {
// name: 'WOMEN -DIVERSITY',
// url:'/outreach/wd'
// }
// ]

// },
{
name:'Graduation Outcomes ',
url:'/graduation-outcomes',
iconComponent: { name: 'cil-cursor' },
children:[
  {
name:'Metric for University Exams',
url:'graduation-outcomes/gue'
  },
  {
    name:'Number of Ph.D students graduated',
    url:'graduation-outcomes/gphd'
  }
]
},
{
name : 'Outreach & Inclusitivity',
url : '/outreach2',
iconComponent: { name: 'cil-cursor' },
children:[
  {
  name  : 'REIGONAL-DIVERSITY',
  url : 'outreach2/rd'
  },
  {
    name:'WOMEN -DIVERSITY',
    url:'outreach2/wd'
  },
  {
    name:'ESCS',
    url:'outreach2/escs'
  }
  ]

  },
  // {
  //   name: 'RESEARCH',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons'
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns'
  //     },
  //     {
  //       name:'IPR',
  //       url:'/buttons/ipr'
  //     },
  //     {
  //       name:'QP',
  //       url:'/buttons/qp'
  //     },
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
  {
  name:'Comp',
  url:'/compare',
  iconComponent: { name: 'cil-chart-pie' },
  children:[
    {
      name:'CompareCollege',
      url:'compare_college'
    }
  ]
  },
  {
    name:"comparison "
    ,url:'compare_college'
  }
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'py-0'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/templates/installation',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank', class: '-text-dark' },
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'https://coreui.io/product/angular-dashboard-template/',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // }
];
