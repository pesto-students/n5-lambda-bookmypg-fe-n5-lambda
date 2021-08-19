import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    borderRadius: "10px",
    marginBottom: "10px",
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
