import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#616161",
  },
  responsivegrid: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
  },
  logo: {
    color: "#FFFEFE",
    textAlign: "left",
    cursor: "pointer",
  },
  menuButton: {
    textTransform: "none",
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  button: {
    justifyContent: "center",
    display: "grid",
    paddingLeft: "32px",
  },
  mobileviewButton: {
    justifyContent: "center",
    display: "grid",
  },
  buttonmargin: {
    marginTop: 10,
    textTransform: "none",
  },
  paper: { height: "80%", width: "70%" },

  backgroundStyle: {
    background: "linear-gradient(to bottom, #232526, #414345)",
  },
  titleStyle: {
    width: "70%",
    textAlign: "center",
    marginTop: "10px",
  },
  imageStyle: {
    width: "40%",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formControl: {
    //margin: theme.spacing(2),
    minWidth: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  contentStyle: {
    width: "250px",
  },
  root: {
    "& $notchedOutline": {
      borderColor: "red",
    },
    "&:hover $notchedOutline": {
      borderColor: "blue",
    },
    "&$focused $notchedOutline": {
      borderColor: "green",
    },
  },
  focused: {},
  notchedOutline: {},
}));

export default useStyles;
