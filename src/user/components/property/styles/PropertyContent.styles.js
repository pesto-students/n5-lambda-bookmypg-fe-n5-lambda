import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingTop: "100px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    maxWidth: "1400px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
  iconText: {
    margin: "0px",
  },
  dialogStyle: { maxWidth: "800px" },
  amenitiesBox: {
    paddingTop: "20px",
    paddingTop: "20px",
  },
  imgboxStyle: {
    height: 355,
    width: "700px",
    maxWidth: "100%",
    display: "block",
    overflow: "hidden",
  },
  imgStyle: {
    height: 300,
    width: "700px",
    maxWidth: "100%",
    display: "block",
    overflow: "hidden",
    cursor: "pointer",
  },
  dialogStyle: {
    position: "fixed",
    display: "block",
  },
  reviewStyle: {
    marginTop: "35px",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
  },
}));

export default useStyles;
