import { Drawer as DrawerMui, List as ListMui } from '@mui/material';
import { NavLink as NavLinkRRD } from 'react-router-dom';
import styled from '@emotion/styled';
import { TIME_TRANSITION } from '../../constants/styledConstant';

export const Sidebar = styled.ul`
  height: 100%;
  background: #e3e3df;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
`;

export const NavLink = styled(NavLinkRRD)`
  width: 100%;
  white-space: nowrap;
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.lightWhite};
  &.active {
    background: ${({ theme }) => theme.colors.background.lightSecondary};
    color: ${({ theme }) => theme.colors.text.primary};
    svg {
      * {
        fill: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }
  svg {
    * {
      fill: ${({ theme }) => theme.colors.text.lightWhite};
    }
  }
`;

export const List = styled(ListMui)`
  &.MuiList-root {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Drawer = styled(DrawerMui, {
  shouldForwardProp: (prop) => prop !== '$isOpen',
})<{ $isOpen: boolean }>`
  position: relative;
  height: 100%;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    background: ${({ theme, $isOpen }) =>
      $isOpen
        ? theme.colors.background.lightPrimary
        : theme.colors.background.extraLightPrimary};
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    transition: ${TIME_TRANSITION.L};
    border: 0;
  }
`;
