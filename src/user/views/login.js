import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { GoogleLoginButton } from "react-social-login-buttons";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../theme/theme.js";
import { MuiThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: "center",
    display: "grid",
    padding: "18px",
  },
  buttonmargin: {
    marginTop: 10,
  },
}));

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  console.log(open);
  const history = useHistory();

  /*const handleClickOpen = () => {
    setOpen(true);
  };*/
  const classes = new useStyles();

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    setOpen(false);
    history.push("/");
  };

  return (
    <MuiThemeProvider theme={Theme}>
      <div>
        <Dialog
          open={true}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Login to your account
          </DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogin}
                className={classes.buttonmargin}
              >
                Singin with Google
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
                className={classes.buttonmargin}
              >
                Cancel
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </MuiThemeProvider>
  );
}
