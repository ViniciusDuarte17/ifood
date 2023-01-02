import { createTheme } from '@mui/material/styles';
import {primary, secondary, success} from "./colors";

const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary
      },
      success: {
        main: success
      }
    },
  });

  export default theme;