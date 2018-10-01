import asyncComponent from './hoc/asyncComponent';

const Cards = asyncComponent(() => import('./views/Cards/Cards'));
const Users = asyncComponent(() => import('./views/Users'));
const AddUsers = asyncComponent(() => import('./views/Users/add'));
const EditUsers = asyncComponent(() => import('./views/Users/edit'));

const routes = [
    {name: 'Cards', path: '/cards', exact: true, component: Cards},
    {name: 'Users', path: '/users', exact: true, component: Users},
    {name: 'AddUsers', path: '/users/add', component: AddUsers},
    {name: 'EditUsers', path: '/users/edit/:id', component: EditUsers},
];

export default routes;