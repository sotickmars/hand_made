import React from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import { RouterPath } from '../../enums/routers';

export const Sidebar: React.FC = () => {
  return (
    <S.Sidebar>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={RouterPath.Settings}>SETTINGS</Link>
      </li>
      <li>
        <Link to={RouterPath.DNDKit}>dnd-kit</Link>
      </li>
      <li>
        <Link to={RouterPath.CounterRTK}>Redux Toolkit Counter</Link>
      </li>
      <li>
        <Link to={RouterPath.PixiRout}>Pixi</Link>
      </li>
    </S.Sidebar>
  );
};
