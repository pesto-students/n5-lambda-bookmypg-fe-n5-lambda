import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textfieldStyle: {
    width: "100%",
  },
  containerStyle: {
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
  },
  gridStyle: {
    padding: "8px",
    textAlign: "center",
  },
  datepickerStyle: {
    padding: "8px",
    textAlign: "center",
    display: "flex",
  },
}));

export default useStyles;
