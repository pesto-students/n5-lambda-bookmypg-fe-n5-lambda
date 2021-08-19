import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes, colors } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#C0C0C0",
      main: "#252525",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2C387E",
      main: "#3f51b5",
      dark: "#172DC1",
      contrastText: "#fff",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#252525",
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
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "#fff",
        },
        "&:hover $notchedOutline": {
          borderColor: "#fff",
        },
        color: "white",
        height: "50px",
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
      stickyHeader: {
        backgroundColor: "#F7FBFF",
      },
    },
    MuiTableRow: {
      head: {
        height: 50,
      },
      root: {
        height: 50,
      },
      hover: {
        "&$hover:hover": {
          backgroundColor: "#F3F9FF",
        },
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: "24px",
        lineHeight: "normal",
        "&$selected": {
          backgroundColor: "#fff",
          //color: "white",
        },
        "&$selected:hover": {
          backgroundColor: "#F3F9FF",
          //color: "white",
        },
        "&:hover": {
          backgroundColor: "#F3F9FF",
          //color: "white",
        },
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },
      hover: {
        "&$hover:hover": {
          backgroundColor: "#F3F9FF",
        },
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
