import { createTheme } from '@mui/material';
import { neutralColor, primaryColor, secundaryColor } from './Colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#ffffff',
    },
    secondary: {
      main: secundaryColor,
    },
  },
});

export default theme;
