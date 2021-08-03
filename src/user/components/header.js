import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];

const locationItems = [
  {
    id: "0",
    name: "None",
  },
  {
    id: "1",
    name: "Delhi",
  },
  {
    id: "2",
    name: "Mumbai",
  },
  {
    id: "3",
    name: "Chennai",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#616161",
  },
  logo: {
    color: "#FFFEFE",
    textAlign: "left",
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
    padding: "18px",
  },
  buttonmargin: {
    marginTop: 10,
  },
}));

const useStylesselect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  heroContent: {
    width: "250px",
  },
}));

export default function Header(props) {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    button,
    buttonmargin,
  } = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const classes = useStyles();

  const classesselect = useStylesselect();

  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

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

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div className={classesselect.heroContent}>{searchBar}</div>
        <div>
          {getMenuButtons()}
          {props.loggedUser == "" ? (
            <Button
              key={"Login"}
              {...{
                color: "inherit",
                className: menuButton,
              }}
              onClick={LoginPopup}
            >
              {"Login"}
            </Button>
          ) : (
            <Button
              key={"Logout"}
              {...{
                color: "inherit",

                className: menuButton,
              }}
              onClick={handleLogout}
            >
              {"Logout"}
            </Button>
          )}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}
            {props.loggedUser == "" ? (
              <Link
                key={"Login"}
                {...{
                  color: "inherit",
                  style: { textDecoration: "none" },
                }}
                onClick={LoginPopup}
              >
                <MenuItem>{"Login"}</MenuItem>
              </Link>
            ) : (
              <Link
                key={"Logout"}
                {...{
                  color: "inherit",
                  style: { textDecoration: "none" },
                }}
                onClick={handleLogout}
              >
                <MenuItem>{"Logout"}</MenuItem>
              </Link>
            )}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <div className={classesselect.heroContent}>{searchBar}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          key={label}
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      BookMyPG
    </Typography>
  );

  const searchBar = (
    <Container maxWidth="sm" component="main">
      <Grid container spacing={2} justifyContent="center">
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            value={location}
            name="Location"
            onChange={handleChange}
            inputProps={{ "aria-label": "location" }}
          >
            <option value="" disabled>
              Search Location
            </option>
            {locationItems.map((location) => (
              <option value={location.id}>{location.name}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Container>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          {...{
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <>
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
      <div>
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
      </div>
    </>
  );
}
