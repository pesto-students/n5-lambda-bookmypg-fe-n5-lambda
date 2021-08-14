import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    display: "inline",
  },
  iconStyle: {
    fill: theme.palette.secondary.contrastText,
  },
}));

export default useStyles;
