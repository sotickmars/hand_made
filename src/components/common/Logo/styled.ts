import styled from '@emotion/styled';
import { NavLink as NavLinkRRD } from 'react-router-dom';

export const WrapperLogo = styled.div`
  position: relative;
  overflow: hidden;
`;
export const LogoTitle = styled(NavLinkRRD)`
  color: ${({ theme }) => theme.colors.text.lightWhite};
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
`;
