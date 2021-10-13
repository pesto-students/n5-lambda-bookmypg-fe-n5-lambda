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
  buttonStyle: {
    textTransform: "none",
  },
  teamDescription: {
    display: "inline-flex",
    margin: "0px",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    marginRight: "20px",
  },
  similarPropertyCard: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    marginRight: "20px",
    overflowY: "auto",
  },
  aboutusCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
  ourTeamCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
    boxShadow: "none",
  },
  propertycard: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  ownerCardStyle: {
    height: "97%",
    display: "flex",
    flexDirection: "column",
    margin: "5px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardPhoto: {
    padding: "140px", // 16:9
    margin: "0px 55px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardText: {
    flexGrow: 1,
    textAlign: "center",
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
    height: "100%",
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
    paddingTop: "60px",
  },
}));

export default useStyles;
