import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import LatestDeployments from '../pages/latest-deployments';
import Solutions from '../pages/solutions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/latest-deployments',
    element: <LatestDeployments />,
  },
  {
    path: '/solutions',
    element: <Solutions />,
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
