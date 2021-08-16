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
  /* overrides: {
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
    MuiTableRow: {
      head: {
        height: 48,
      },
      root: {
        height: 40,
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
    MuiButton: {
      root: {
        minHeight: "32px",
        fontSize: "0.80rem",
        padding: "4px 20px",
        minWidth: "45px",
        borderRadius: "6px",
        margin: "0 8px",
        lineHeight: "normal",
      },
    },
    MuiInputBase: {
      root: {
        fontSize: "0.9rem",
        lineHeight: "normal",
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: "0.9rem",
        lineHeight: "normal",
      },
    },
    MuiListItemText: {
      root: {
        padding: "0px 0px",
      },
    },
    MuiIconButton: {
      root: {
        padding: 6,
      },
      colorInherit: {
        color: "#FFF",
      },
    },
    MuiTablePagination: {
      toolbar: {
        height: 48,
        minHeight: 48,
      },
    },
    MuiPaper: {
      root: {
        position: "relative",
        overflow: "auto",
        flex: 1,
      },
    },
    MuiDialogContent: {
      root: {
        position: "relative",
        firstChild: {
          paddingTop: 0,
        },
      },
    },
    MuiDialog: {
      paper: {
        position: "relative",
      },
    },
  },*/
});

export default theme;
