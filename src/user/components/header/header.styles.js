import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
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
    paddingTop: "20px",
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
    background: "linear-gradient(to right, #005c97, #363795)",
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
    minWidth: "100%",
    color: "white"
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
  icon: {
    fill: "white",
  },

  textfieldStyle: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    icon: {
      color: "white",
    },
  },
  listitemStyle: {
    minWidth: "unset",
  },
  menuitemStyle: {
    fontWeight: 600,
    padding: "4px 8px",
  },
}));

export default useStyles;
