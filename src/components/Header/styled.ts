import styled from '@emotion/styled';
import { AppBar as AppBarMui } from '@mui/material';

export const Header = styled.header`
  color: #ffffff;
`;

export const AppBar = styled(AppBarMui)`
  background: ${({ theme }) => theme.colors.background.extraLightPrimary};
  box-shadow: none;
  padding: 0;
  .MuiToolbar-root {
    padding: 0 15px;
    min-height: auto;
  }
`;
