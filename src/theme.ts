import { createTheme } from '@mui/material/styles';

import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#090707',
      paper: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
    primary: {
      main: '#57b660',
      contrastText: '#000000',
    },
    secondary: {
      main: '#949ea2',
      contrastText: '#000000',
    },
    error: {
      main: '#ff5c5c',
      contrastText: '#ffffff',
    },
    action: {
      hover: '#6fd174',
    },
    divider: '#303030',
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
        },
        containedPrimary: {
          backgroundColor: '#57b660',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#6fd174',
          },
        },
      },
    },
  },
});

export default theme;
