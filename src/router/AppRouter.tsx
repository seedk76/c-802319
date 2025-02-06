import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import LatestDeployments from '../pages/latest-deployments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { 
  path: '/solutions',
  element: <Solutions />,
 },
  {
    path: '/latest-deployments',
    element: <LatestDeployments />,
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
