import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    purple: 'rgb(157, 69, 255)',
    purpleTransparent: 'rgba(157, 69, 255, 0.1)',
    greyLight: 'rgb(238, 238, 240)',
    greyDark: 'rgb(51, 51, 51)',
    red: 'rgb(255, 100, 106)',
    redTransparent: 'rgba(255, 106, 112, 0.1)',
    white: 'rgb(255, 255, 255)',
    blue: 'rgb(0, 152, 253)',
  },
  typography: {
    default: {
      size: '16px',
    },
    small: {
      size: '10px',
    },
    medium: {
      size: '14px',
    },
    large: {
      size: '20px',
    },
  },
  spacing: {
    tiny: '4px',
    small: '8px',
    medium: '16px',
    large: '32px',
    container: '1200px',
  },
  defaults: {
    borderRadius: '1rem',
    boxShadow: 'rgb(0 0 0 / 6%) 0px 1px 1px',
  },
};
