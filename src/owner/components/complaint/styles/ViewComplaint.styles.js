import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&$disabled": {
      color: "#616161",
    },
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    disabled: {},
    notchedOutline: {},
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
    paddingLeft: "35px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
    textAlign: "left",
    margin: "0px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  containerStyle: {
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
  },
  textfieldStyle: {
    width: "100%",
  },
}));

export default useStyles;
