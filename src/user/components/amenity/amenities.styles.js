import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    paddingTop: "10px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    boxShadow: "none",
  },
}));

export default useStyles;
