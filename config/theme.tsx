import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
palette: {
   primary: {
      main: '#363740',
   },
   secondary: {
     main: '#2FD5C1',
   },
   error: {
   main: red.A400,
   },
  },
});
export default theme;