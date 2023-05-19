import Home from '~/pages/Home';
import Transaction from '~/pages/Transaction';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/transaction', component: Transaction },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
