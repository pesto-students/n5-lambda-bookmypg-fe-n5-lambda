import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    boxShadow: "none",
  },
  gridStyle: {
    paddingBottom: "20px",
  },
  reviewgridStyle: {
    padding: "10px",
  },
  usernameStyle: {
    paddingLeft: "10px",
    paddingTop: "10px",
  },
  graphboxStyle: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
  },
}));

export default useStyles;
