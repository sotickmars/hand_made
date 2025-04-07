import React from 'react';
import * as S from './styled';
import { Outlet } from 'react-router-dom';

export const Settings: React.FC = () => {
  return (
    <S.SettingsContainer>
      SETTINGS
      <Outlet />
    </S.SettingsContainer>
  );
};
