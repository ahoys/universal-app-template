import Dashboard from 'components/dashboard/Dashboard';
import Settings from 'components/settings/Settings';
import NotFound from 'components/not-found/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/settings',
    component: Settings,
  },
  {
    component: NotFound,
  }
];

export default routes;