import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgStyle: {
    width: "30px",
  },
  labelStyle: {
    paddingTop: "14px",
    paddingRight: "10px",
  },
  iconStyle: {
    paddingLeft: "0px",
  },
  divStyle: {
    display: "flex",
    margin: "auto",
    flexWrap: "wrap",
  },
  inputStyle: {
    display: "none",
  },
}));

export default useStyles;
