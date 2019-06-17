import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const routes = [
    {
        id: 1,
        name: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        id: 2,
        name: 'About',
        path: '/about',
        exact: true,
        component: About
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact',
        exact: true,
        component: Contact
    },
    {
        id: 4,
        path: '/404',
        exact: true,
        component: NotFound
    }
];

export default routes;