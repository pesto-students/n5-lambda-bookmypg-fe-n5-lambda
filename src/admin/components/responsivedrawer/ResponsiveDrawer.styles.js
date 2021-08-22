import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: "0px",
    },
    marginTop: "56px",
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "auto",
    marginTop: "58px",
    paddingTop: "40px",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      marginTop: "65px",
    },
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    marginTop: "50px",
  },
  menuitemStyle: {
    textDecoration: "none",
  },
  listitemStyle: {
    minWidth: "unset",
  },
  menuitemStyle: {
    fontWeight: 600,
    padding: "4px 8px",
  },
}));

export default useStyles;
