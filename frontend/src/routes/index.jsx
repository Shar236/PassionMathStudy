import { createBrowserRouter, Outlet } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
  },
]);

export default router;