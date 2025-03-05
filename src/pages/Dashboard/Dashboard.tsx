import React from 'react';
import * as S from './styled';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

export const Dashboard: React.FC = () => {
  return (
    <S.DashboardContainer>
      <Header />
      <S.Main>
        <Sidebar />
        <Outlet />
      </S.Main>
      <Footer />
    </S.DashboardContainer>
  );
};
