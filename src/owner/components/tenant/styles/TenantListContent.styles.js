import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  gridStyle: {
    textAlign: "center",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    paddingTop: "10px",
    marginBottom: "100px",
  },
  datepickerStyle: {
    paddingTop: "16px",
    textAlign: "center",
    display: "flex",
  },
  textfieldStyle: {
    padding: "18px",
    textAlign: "center",
  },
}));

export default useStyles;
