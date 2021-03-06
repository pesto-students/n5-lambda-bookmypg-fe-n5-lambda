import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  contentStyle: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingTop: "100px",
  },
  buttonStyle: {
    textTransform: "none",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    marginRight: "20px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  iconbuttons: {
    display: "flex",
  },
  icons: {
    [theme.breakpoints.down("md")]: {
      transform: "rotate(90deg)",
    },
    [theme.breakpoints.up("md")]: {
      transform: "rotate(0deg)",
    },
    [theme.breakpoints.up("lg")]: {
      transform: "rotate(0deg)",
    },
  },
  responsivegrid: {
    display: "flex",
    marginTop: "15px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  propertynameStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  ratingboxStyle: {
    display: "flex",
    paddingBottom: "10px",
    justifyContent: "space-between",
  },
}));

export default useStyles;
