import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            '@media print': {
              color: 'black',
              lineHeight: 1.5,
              fontSize: 14,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            '@media print': {
              boxShadow: 'none',
              backgroundColor: 'white',
            },
          },
        },
      },
    },
    typography: {
      h4: {
        textTransform: 'uppercase',
      },
      h5: {
        textTransform: 'uppercase',
      },
      body2: {
        fontSize: '1.1rem',
      },
      fontFamily: `'Exo 2', Helvetica, sans-serif`,
    },
    palette: {
      mode,
      primary: {
        light: '#657983',
        main: '#455a64',
        dark: '#1c313a',
        contrastText: '#fff',
      },
    },
  });

export default createAppTheme;
