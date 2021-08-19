import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),

    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    height: "100%",
  },
  topPadding: {
    marginTop: "60px",
  },
  paddingStyle: {
    marginTop: "40px",
    marginBottom: "20px",
  },
  centerAlign: {
    textAlign: "center",
  },
}));

export default useStyles;
