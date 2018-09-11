import asyncComponent from './hoc/asyncComponent';

const Cards = asyncComponent(() => import('./views/Cards/Cards'));
const Users = asyncComponent(() => import('./views/Users'));

const routes = [
    {name: 'Cards', path: '/cards', exact: true, component: Cards},
    {name: 'Users', path: '/users', exact: true, component: Users}
];

export default routes;