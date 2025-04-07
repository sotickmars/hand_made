import { Theme as MuiTheme } from '@mui/material/styles';

export type ThemeVariant = 'light' | 'dark';

export interface CustomColorsTheme {
  colors: {
    background: {
      primary: string;
      lightPrimary: string;
      extraLightPrimary: string;
      secondary: string;
      lightSecondary: string;
    };
    text: {
      lightWhite: string;
      primary: string;
      lightPrimary: string;
      extraLightPrimary: string;
      secondary: string;
      lightSecondary: string;
    };
    primary: string;
    lightPrimary: string;
    extraLightPrimary: string;
    secondary: string;
    lightSecondary: string;
  };
}

export type FullTheme = MuiTheme & CustomColorsTheme;
