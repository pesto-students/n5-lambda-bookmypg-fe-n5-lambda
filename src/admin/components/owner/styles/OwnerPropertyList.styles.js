import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  button: {
    margin: 10,
  },
  dialogTitle: {
    alignSelf: "center",
    padding: "0px",
  },

  formAlign: {
    alignSelf: "center",
    overflow: "unset",
  },
  imgStyle: {
    width: "70px",
    alignContent: "center",
    paddingLeft: "35px",
  },
  textfieldStyle: {
    width: "100%",
  },
  buttonStyle: {
    alignSelf: "center",
    justifyContent: "center",

    display: "flex",
    paddingBottom: "10px",
  },
  containerStyle: {
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
  },
  boxStyle: {
    display: "flex",
    alignItems: "flex-start",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  contentStyle: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingTop: "100px",
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "20px",
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
  gridStyle: {
    marginLeft: "0px",
  },
  textfieldStyle: {
    width: "100%",
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
}));

export default useStyles;
