import React from 'react';
import * as S from './styled';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeIsOpenSidebar, changeTheme } from '../../features/appSlice';

export const RootContainer: React.FC = () => {
  const isOpenSidebar = useSelector(
    (state: RootState) => state.appState.isOpenSidebar
  );
  const themeType = useSelector((state: RootState) => state.appState.theme);
  const dispatch = useDispatch();

  return (
    <S.RootContainer>
      <Header
        isOpenSidebar={isOpenSidebar}
        onChangeStateSidebar={() => dispatch(changeIsOpenSidebar())}
        onChangeTheme={() => {
          return dispatch(
            changeTheme(themeType === 'light' ? 'dark' : 'light')
          );
        }}
      />
      <S.Main $isOpen={isOpenSidebar}>
        <Sidebar
          isOpen={isOpenSidebar}
          onClose={() => dispatch(changeIsOpenSidebar())}
        />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
      </S.Main>
      <Footer />
    </S.RootContainer>
  );
};
