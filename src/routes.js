import asyncComponent from './hoc/asyncComponent';

const Users = asyncComponent(() => import('./views/Users'));
const AddUsers = asyncComponent(() => import('./views/Users/add'));
const EditUsers = asyncComponent(() => import('./views/Users/edit'));

const News = asyncComponent(() => import('./views/News'));
const AddNews = asyncComponent(() => import('./views/News/add'));
const EditNews = asyncComponent(() => import('./views/News/edit'));

const Permissions = asyncComponent(() => import('./views/Permissions'));
const AddPermissions = asyncComponent(() => import('./views/Permissions/add'));
const EditPermissions = asyncComponent(() => import('./views/Permissions/edit'));

const Roles = asyncComponent(() => import('./views/Roles'));
const AddRoles = asyncComponent(() => import('./views/Roles/add'));
const EditRoles = asyncComponent(() => import('./views/Roles/edit'));

const Admins = asyncComponent(() => import('./views/Admins'));
const AddAdmins = asyncComponent(() => import('./views/Admins/add'));
const EditAdmins = asyncComponent(() => import('./views/Admins/edit'));

const routes = [
    {name: 'Users', path: '/users', exact: true, component: Users},
    {name: 'AddUsers', path: '/users/add', component: AddUsers},
    {name: 'EditUsers', path: '/users/edit/:id', component: EditUsers},

    {name: 'News', path: '/news', exact: true, component: News},
    {name: 'AddNews', path: '/news/add', component: AddNews},
    {name: 'EditNews', path: '/news/edit/:id', component: EditNews},

    {name: 'Permissions', path: '/permissions', exact: true, component: Permissions},
    {name: 'AddPermissions', path: '/permissions/add', component: AddPermissions},
    {name: 'EditPermissions', path: '/permissions/edit/:id', component: EditPermissions},

    {name: 'Roles', path: '/roles', exact: true, component: Roles},
    {name: 'AddRoles', path: '/roles/add', component: AddRoles},
    {name: 'EditRoles', path: '/roles/edit/:id', component: EditRoles},

    {name: 'Admins', path: '/admins', exact: true, component: Admins},
    {name: 'AddAdmins', path: '/admins/add', component: AddAdmins},
    {name: 'EditAdmins', path: '/admins/edit/:id', component: EditAdmins},
];

export default routes;