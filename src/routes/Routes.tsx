import * as React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Screen from 'screens';
import Path, { AppPath } from 'routes/paths';
import Layout from 'components/Layout/Layout';

const routes: RouteObject[] = [
  {
    path: Path.ROOT,
    element: <Layout />,
    children: [
      {
        path: Path.ROOT,
        element: <Screen.Chat />,
      },
      {
        path: AppPath.GALLERY,
        element: <Screen.Gallery />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
