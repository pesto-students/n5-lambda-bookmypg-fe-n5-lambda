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
      light: "#424242",
      main: "#616161",
      dark: "#424242",
      contrastText: "#fff",
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    spacing: 4,
    overrides: {
      MuiTypography: {
        body2: {
          fontWeight: 500,
          fontSize: "0.90rem",
        },
        subtitle2: {
          fontWeight: 500,
        },
        body1: {
          fontSize: "1rem",
          letterSpacing: "0.00938em",
        },
        h4: {
          fontSize: "1.5rem",
        },
        h6: {
          fontSize: 14,
          /* fontFamily: "Roboto", "Helvetica", "Arial", 'sans-serif', */
          fontWeight: 500,
          lineHeight: 1.6,
          letterSpacing: -0.05,
        },
      },
      MuiTableCell: {
        head: {
          fontWeight: 500,
          fontSize: "0.85rem",
          lineHeight: "normal",
        },
        root: {
          padding: "4px 16px 4px 24px",
        },
      },
    },
  },
});

export default theme;
