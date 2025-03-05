import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Dashboard, Settings, DNDKit, CounterRTK, Pixi } from '../pages';
import { RouterPath } from '../enums/routers';

export const routers: RouteObject[] = [
  {
    path: RouterPath.Root,
    element: <Dashboard />,
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
      {
        path: RouterPath.DNDKit,
        element: <DNDKit />,
      },
      {
        path: RouterPath.PixiRout,
        element: <Pixi />,
      },
    ],
  },
];
