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
  buttonMarginStyle: {
    paddingTop: "80px",
  },
  buttonsMobile: {
    paddingTop: "0px",
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    flexGrow: 1,
  },
  card: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "100%",
      padding: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      height: "100%",
      padding: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
      height: "100%",
      padding: "10px",
    },
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

  root: {
    display: "flex",
    padding: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  detailsMobile: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  content: {
    flex: "1 0 auto",
    padding: 0,
    paddingLeft: "20px",
  },
  cover: {
    width: 351,
    height: 210,
  },
  buttonStyle: {
    margin: "10px",
    textTransform: "none",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  ratingStyle: {
    display: "flex",
    paddingBottom: "10px",
    paddingTop: "20px",
    justifyContent: "space-evenly",
  },
  descriptionStyle: {
    wordWrap: "break-word",
  },
}));

export default useStyles;
