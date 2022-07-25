import { createTheme } from '@mui/material';
import { primaryColor, neutralColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#ffffff',
    },
    text: {
      primary: neutralColor,
    },
  },
});

export default theme;
