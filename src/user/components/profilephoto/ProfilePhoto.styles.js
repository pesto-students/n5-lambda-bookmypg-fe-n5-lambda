import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatarStyle: {
    width: "192px",
    height: "192px",

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
