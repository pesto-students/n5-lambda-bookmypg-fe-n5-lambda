import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#212121",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#616161",
      dark: "#ba000d",
      contrastText: "#fff",
    },
  },
});

export default theme;
