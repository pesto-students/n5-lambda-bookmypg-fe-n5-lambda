import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textfieldStyle: {
    width: "100%",
  },
  buttonStyle: {
    alignSelf: "center",
  },
  containerStyle: {
    padding: "8px",
    textAlign: "center",
  },
  searchboxStyle: {
    padding: "18px",
    paddingLeft: "0px",
    textAlign: "center",
  },
  datepickerStyle: {
    padding: "8px",
    textAlign: "center",
    display: "flex",
  },
}));

export default useStyles;