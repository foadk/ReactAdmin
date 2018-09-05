import asyncComponent from './hoc/asyncComponent';

const Cards = asyncComponent(() => import('./views/Cards/Cards'));

const routes = [
    {name: 'Cards', path: '/cards', exact: true, component: Cards}
];

export default routes;