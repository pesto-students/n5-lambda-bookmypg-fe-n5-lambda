import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "&$disabled": {
      color: "#616161",
    },
  },
  disabled: {},
  notchedOutline: {},
  button: {
    margin: 10,
  },
  dialogTitle: {
    alignSelf: "center",
    padding: "0px",
  },
  dialogBox: {
    width: "calc(1278px + 0.5vw)",
  },
  formAlign: {
    alignSelf: "center",
    overflow: "unset",
  },
  dateComponentSize: {
    width: "calc(278px + 0.5vw)",
  },
  formControl: {
    minWidth: 120,
    width: "100%",
    textAlign: "left",
    margin: "0px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textfieldStyle: {
    width: "100%",
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
    paddingTop: "25px",
  },
  gridStyle: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    paddingRight: "10px",
  },
}));

export default useStyles;
