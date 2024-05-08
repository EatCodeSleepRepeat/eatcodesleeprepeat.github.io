import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#536dfe", // a pleasant blue
    },
    secondary: {
      main: "#ff4081", // a vibrant pink
    },
  },
  typography: {
    fontFamily: '"Comic Neue", cursive',
    fontSize: 14,
  },
});

export default theme;
