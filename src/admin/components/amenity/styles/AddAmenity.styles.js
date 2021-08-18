import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  button: {
    margin: 10,
  },
  dialogTitle: {
    alignSelf: "center",
    padding: "0px",
  },

  formAlign: {
    alignSelf: "center",
    overflow: "unset",
  },
  containerStyle: {
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
  },
  buttonStyle: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    paddingRight: "10px",
  },
}));

export default useStyles;
