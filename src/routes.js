import Dashboard from 'components/dashboard/Dashboard';
import NotFound from 'components/not-found/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    component: NotFound,
  }
];

export default routes;