import asyncComponent from './hoc/asyncComponent';

const Cards = asyncComponent(() => import('./views/Cards/Cards'));

const Users = asyncComponent(() => import('./views/Users'));
const AddUsers = asyncComponent(() => import('./views/Users/add'));
const EditUsers = asyncComponent(() => import('./views/Users/edit'));

const News = asyncComponent(() => import('./views/News'));
const AddNews = asyncComponent(() => import('./views/News/add'));
const EditNews = asyncComponent(() => import('./views/News/edit'));

const Permissions = asyncComponent(() => import('./views/Permissions'));
const AddPermissions = asyncComponent(() => import('./views/Permissions/add'));
const EditPermissions = asyncComponent(() => import('./views/Permissions/edit'));

const routes = [
    {name: 'Cards', path: '/cards', exact: true, component: Cards},

    {name: 'Users', path: '/users', exact: true, component: Users},
    {name: 'AddUsers', path: '/users/add', component: AddUsers},
    {name: 'EditUsers', path: '/users/edit/:id', component: EditUsers},

    {name: 'News', path: '/news', exact: true, component: News},
    {name: 'AddNews', path: '/news/add', component: AddNews},
    {name: 'EditNews', path: '/news/edit/:id', component: EditNews},

    {name: 'Permissions', path: '/permissions', exact: true, component: Permissions},
    {name: 'AddPermissions', path: '/permissions/add', component: AddPermissions},
    {name: 'EditPermissions', path: '/permissions/edit/:id', component: EditPermissions},
];

export default routes;