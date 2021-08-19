import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  widthStyle: {
    width: "100%",
  },
  disabledStyle: {
    root: {
      "&$disabled": {
        color: theme.palette.secondary,
      },

      disabled: {},
      notchedOutline: {},
    },
    width: "100%",
  },
}));

export default useStyles;
