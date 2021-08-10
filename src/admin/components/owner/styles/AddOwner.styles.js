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
  imgStyle: {
    width: "70px",
    alignContent: "center",
    paddingLeft: "35px",
  },
  textfieldStyle: {
    width: "100%",
  },
  buttonStyle: {
    alignSelf: "center",
  },
  containerStyle: {
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
  },
  boxStyle: {
    display: "flex",
    alignItems: "flex-start",
  },
}));

export default useStyles;
