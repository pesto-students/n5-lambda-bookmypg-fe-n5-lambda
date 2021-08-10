import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  widthStyle: {
    width: "100%",
  },
  disabledStyle: {
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
    width: "100%",
  },
}));

export default useStyles;
