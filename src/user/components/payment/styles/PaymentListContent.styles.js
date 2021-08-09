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
  searchfieldStyle: {
    padding: "18px",
    paddingLeft: "0px",
    textAlign: "center",
  },
  datepickerStyle: {
    padding: "8px",
    textAlign: "center",
    display: "flex",
  },
  datepickermarginStyle: {
    marginLeft: "10px",
  },
}));

export default useStyles;
