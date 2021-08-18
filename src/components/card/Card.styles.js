import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: "300px",
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop: "2px",
  },
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
    height: "380px",
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    //height: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    //height: "350px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    marginRight: "20px",
  },
  aboutusCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
  propertycard: {
    //height: "350px",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    //marginRight: "20px",
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
  propertynameStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  ratingboxStyle: {
    display: "flex",
    paddingBottom: "10px",
    paddingLeft: "16px",
    paddingRight: "16px",
    justifyContent: "space-between",
  },
  propertylistRoot: {
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
    marginLeft: "10px",
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

    justifyContent: "space-evenly",
  },
  descriptionStyle: {
    wordWrap: "break-word",
  },
  buttonMarginStyle: {
    paddingTop: "90px",
  },
}));

export default useStyles;
