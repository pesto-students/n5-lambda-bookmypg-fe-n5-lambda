import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    maxWidth: "960px",
  },
  section: {
    paddingLeft: "190px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "190px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "190px",
    },
  },
}));

export default useStyles;
