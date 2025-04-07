import { RouteObject } from 'react-router-dom';
import { RootContainer, Settings, CounterRTK } from '../pages';
import { RouterPath } from '../enums/routers';

export const routers: RouteObject[] = [
  {
    path: RouterPath.Root,
    element: <RootContainer />,
    errorElement: <>ERROR</>,
    children: [
      {
        path: RouterPath.Settings,
        element: <Settings />,
      },
      {
        path: RouterPath.CounterRTK,
        element: <CounterRTK />,
      },
    ],
  },
];
