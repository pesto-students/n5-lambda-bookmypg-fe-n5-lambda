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
  dialogBox: {
    width: "calc(478px + 0.5vw)",
  },
  formAlign: {
    alignSelf: "center",
  },
  dateComponentSize: {
    width: "calc(278px + 0.5vw)",
  },
  imgStyle: {
    width: "70px",
    alignContent: "center",
    paddingLeft: "30px",
  },
  textAlign: {
    textAlign: "center",
  },
  monetizationStyle: {
    paddingRight: "10px",
    color: "grey",
  },
  textfieldStyle: {
    width: "100%",
  },
  iconStyle: {
    paddingRight: "10px",
    color: "grey",
  },
}));

export default useStyles;
