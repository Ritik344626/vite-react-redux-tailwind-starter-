import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from '../constants/endpoint';
import App from '../pages/App';
import NotFound from '../pages/notFound';
import AuthExample from '@/pages/AuthExample';

const allRoutes: RouteObject[] = [
  {
    path: ROUTES.APP_ROOT,
    element: <App />,
  },
  {
    path: ROUTES.LOGIN,
    element: <AuthExample />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default function Router() {
  const route = useRoutes(allRoutes);
  return route;
}
