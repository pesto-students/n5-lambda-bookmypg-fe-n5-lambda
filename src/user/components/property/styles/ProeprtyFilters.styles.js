import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "80px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexShrink: 0,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "150px",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
    marginTop: "60px",
    backgroundColor: "white",
    color: "black",
  },
  searchsortButtons: {
    justifyContent: "flex-end",
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 240,
    marginTop: "60px",
  },
  content: {
    flexGrow: 1,
    flexDirection: "column",
    padding: theme.spacing(3),
    paddingTop: "70px",
  },
  searchbox: {
    height: "25px",
  },
  labelStyle: {
    fontSize: "14px",
  },
}));

export default useStyles;
