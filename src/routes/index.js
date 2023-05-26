import Home from '~/pages/Home';
import Transaction from '~/pages/Transaction';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/transaction', component: Transaction },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
