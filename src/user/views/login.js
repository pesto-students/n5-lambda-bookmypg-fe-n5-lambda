import { AppBar, makeStyles, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles(() => ({
  button: {
    justifyContent: "center",
    display: "grid",
    padding: "18px",
  },
  buttonmargin: {
    marginTop: 10,
  },
}));

export default function Login(props) {
  const { button, buttonmargin } = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const LoginPopup = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    props.setLoggedUser("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
    props.setLoggedUser(response.user);
    console.log("USER", response.user._lat);
    setOpen(false);
    history.push("/");
  };

  const openPopup = () => {
    return (
      <>
        {props.loggedUser == "" ? (
          <Button
            style={{
              color: "inherit",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 700,
              size: "18px",
              marginLeft: "38px",
            }}
            onClick={LoginPopup}
          >
            {"Login"}
          </Button>
        ) : (
          <Button
            style={{
              color: "inherit",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 700,
              size: "18px",
              marginLeft: "38px",
            }}
            onClick={handleLogout}
          >
            {"Logout"}
          </Button>
        )}
      </>
    );
  };

  return (
    <>
      {openPopup()}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Please login to your account
        </DialogTitle>
        <div className={button}>
          <GoogleLoginButton
            text="Sign In with Google"
            style={{
              width: "230px",
              height: "35px",
              justifyContent: "center",
              textAlign: "center",
            }}
            onClick={handleLogin}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
            className={buttonmargin}
          >
            Cancel
          </Button>
        </div>
      </Dialog>
    </>
  );
}
