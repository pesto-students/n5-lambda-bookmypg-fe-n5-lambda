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
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  cardContent: {
    flexGrow: 1,
  },
  buttonStyle: {
    display: "flex",
    paddingBottom: "10px",
    alignSelf: "center",
  },
  buttonSpacing: {
    marginLeft: "20px",
  },
  propertydetailStyle: {
    display: "flex",
  },
  ownerStyle: {
    paddingTop: "10px",
    paddingLeft: "5px",
  },
  ratingboxStyle: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    paddingTop: "10px",
  },
  descriptionStyle: {
    padding: "8px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
}));

export default useStyles;
