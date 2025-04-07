import { createTheme } from '@mui/material';
import { FullTheme, CustomColorsTheme, ThemeVariant } from './types';

declare module '@emotion/react' {
  export interface Theme extends FullTheme {}
}
// Расширяем глобальный тип Theme с кастомными свойствами
declare module '@mui/material/styles' {
  interface Theme extends CustomColorsTheme {} // Расширяем Theme, добавив colors
  interface ThemeOptions extends CustomColorsTheme {} // Для options тоже добавляем
}
// const env = import.meta.env;

const agroConnectThemes: Record<ThemeVariant, CustomColorsTheme> = {
  light: {
    colors: {
      background: {
        primary: '#24305E',
        lightPrimary: '#374785',
        extraLightPrimary: '#A8D0E6',
        secondary: '#F76C6C',
        lightSecondary: '#F8E9A1',
      },
      text: {
        lightWhite: '#FFFEFB',
        primary: '#24305E',
        lightPrimary: '#374785',
        extraLightPrimary: '#A8D0E6',
        secondary: '#F76C6C',
        lightSecondary: '#F8E9A1',
      },
      primary: '#24305E',
      lightPrimary: '#374785',
      extraLightPrimary: '#A8D0E6',
      secondary: '#F76C6C',
      lightSecondary: '#F8E9A1',
    },
  },
  dark: {
    colors: {
      background: {
        primary: '#6B6E70',
        lightPrimary: '#474B4F',
        extraLightPrimary: '#222629',
        secondary: '#61892F',
        lightSecondary: '#86C232',
      },
      text: {
        lightWhite: '#FFFEFB',
        primary: '#6B6E70',
        lightPrimary: '#474B4F',
        extraLightPrimary: '#222629',
        secondary: '#61892F',
        lightSecondary: '#86C232',
      },
      primary: '#6B6E70',
      lightPrimary: '#474B4F',
      extraLightPrimary: '#222629',
      secondary: '#61892F',
      lightSecondary: '#86C232',
    },
  },
};

const getCustomTheme = () => {
  return agroConnectThemes;
};

/**
 * Function, which applies mui theme-styles for custom theme and return resulted theme.
 **/
export const getTheme = (variant: ThemeVariant) => {
  // initial mui-theme definition
  let theme = createTheme({
    palette: {
      mode: variant,
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
    },

    ...getCustomTheme()[variant],
  });

  // overriding mui-components styles with custom theme properties
  theme = createTheme(theme, {
    components: {
      MuiDrawer: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            lineHeight: '1rem',
            '.MuiPaper-root': {
              // background: theme.palette.mode === 'light' ? '#000000' : '#fff',
            },
          },
        },
      },
      // MuiAppBar: {
      //   styleOverrides: {
      //     root: {
      //       background: `${theme.colors.background.extraLightPrimary}`,
      //       boxShadow: 'none',
      //       height: 'auto',
      //     },
      //   },
      // },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            lineHeight: '1rem',
            borderRadius: '10px',
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          filterFormValueInput: {
            width: '180px',

            '.MuiFormControl-root': {
              width: '100%',
            },
          },
        },
      },
    },
  });

  // add mui-components localizations, according i18n for core and additional components
  theme = createTheme(
    theme
    // muiLocaleCore,
    // muiLocaleDataGrid,
    // muiLocaleDatePickers
  );

  return theme;
};
