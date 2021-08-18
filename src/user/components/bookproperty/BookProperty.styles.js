import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    width: "80px",
    alignContent: "center",
    paddingLeft: "30px",
  },
  textAlign: {
    textAlign: "center",
  },
  monetizationStyle: {
    paddingRight: "10px",
    color: "grey",
    width: "25px",
  },
  textfieldStyle: {
    width: "100%",
  },
  bookpropertyStyle: {
    display: "flex",
    paddingBottom: "10px",
  },
}));

export default useStyles;
