import styled from '@emotion/styled';
import { TIME_TRANSITION } from '../../constants/styledConstant';

export const RootContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.extraLightPrimary};
`;
export const Main = styled.main<{ $isOpen: boolean }>`
  height: 100%;
  display: grid;
  grid-template-columns: ${({ $isOpen }) =>
    $isOpen ? '200px 1fr' : '52px 1fr'};
  transition: ${TIME_TRANSITION.S};
  align-items: start;
`;

export const OutletContainer = styled.div`
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
`;
