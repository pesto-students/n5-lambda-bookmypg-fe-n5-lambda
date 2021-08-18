import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#C0C0C0",
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
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: 4,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 550,
        fontSize: "1.00rem",
        lineHeight: "normal",
        //color: "#fff",
      },
      root: {
        padding: "4px 16px 4px 24px",
      },
    },
    MuiTableRow: {
      head: {
        height: 50,
        //backgroundColor: "#616161",
      },
      root: {
        height: 50,
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: "24px",
        lineHeight: "normal",
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },
    },
    MuiListItemText: {
      root: {
        padding: "0px 0px",
      },
    },
  },
});

export default theme;
