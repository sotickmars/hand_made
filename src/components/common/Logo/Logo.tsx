import React from 'react';
import * as S from './styled';
import { RouterPath } from '../../../enums/routers';

export const Logo: React.FC = () => {
  return (
    <S.WrapperLogo>
      <S.LogoTitle to={RouterPath.Root}>HandMade</S.LogoTitle>
    </S.WrapperLogo>
  );
};
