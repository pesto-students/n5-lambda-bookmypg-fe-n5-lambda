import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  display: "flex",
  "& > *": {
    margin: theme.spacing(1),
  },
  largeStyle: {
    width: theme.spacing(28),
    height: theme.spacing(28),

    [theme.breakpoints.down("xs")]: {
      marginLeft: "40px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "40px",
    },
  },
}));

export default useStyles;
