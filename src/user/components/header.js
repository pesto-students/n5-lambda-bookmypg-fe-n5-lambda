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
  DialogContent,
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
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

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
  responsivegrid: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
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
    textTransform: "none",
  },
  paper: { height: "80%", width: "70%" },

  root: {
    background: "linear-gradient(to bottom, #232526, #414345)",
  },
  titleStyle: {
    width: "70%",
    textAlign: "center",
    marginTop: "50px",
  },
  imageStyle: {
    width: "40%",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
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
      {mobileView ? (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth={true}
            maxWidth="lg"
            classes={{ paper: classes.paper }}
          >
            <DialogContent style={{ padding: "0px" }}>
              <Grid className={classes.responsivegrid}>
                <Grid
                  item
                  xs={12}
                  style={{ "justify-content": "center", display: "flex" }}
                >
                  <Box
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div className={button}>
                      <Typography
                        component="h1"
                        variant="h6"
                        color="secondary.contrastText"
                        gutterBottom
                      >
                        Login to your Account
                      </Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogin}
                        className={buttonmargin}
                      >
                        Signin with Google
                      </Button>
                      <Typography
                        variant="body2"
                        gutterBottom
                        color="primary"
                        style={{ marginTop: "20px" }}
                      >
                        By continuing, you agree to BookMyPG's
                        <Link href="#" gutterBottom>
                          &nbsp;Conditions&nbsp;
                        </Link>
                        <br />
                        of Use and Privacy Notice
                      </Typography>
                      <div
                        color="secondary"
                        gutterBottom
                        style={{
                          marginTop: "40px",
                          alignContent: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ marginTop: "20px" }}></div>
                        <Typography color="secondary.contrastText">
                          Connect with us via
                        </Typography>
                        <div justifyContent="center">
                          <FacebookIcon fontSize="large" />
                          <TwitterIcon fontSize="large" />
                          <EmailIcon fontSize="large" />
                        </div>
                      </div>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth={true}
            maxWidth="lg"
            classes={{ paper: classes.paper }}
          >
            <DialogContent style={{ padding: "0px" }}>
              <Grid className={classes.responsivegrid}>
                <Grid item xs={12} sm={6} className={classes.root}>
                  <Box
                    color="primary.contrastText"
                    height="100%"
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    className={classes.boxStyle}
                  >
                    <img
                      src="BookMyPG-Logo.jpg"
                      alt="No image available"
                      className={classes.imageStyle}
                    />
                    <Typography
                      component="paragraph"
                      variant="h6"
                      color="secondary.contrastText"
                      gutterBottom
                      className={classes.titleStyle}
                    >
                      Get exclusive access <br /> to BookMyPG
                    </Typography>
                    <Typography
                      component="paragraph"
                      variant="body2"
                      color="secondary.contrastText"
                      gutterBottom
                      className={classes.titleStyle}
                    >
                      Be the member of BookMyPG for the exclusive facilities
                      like book your property <br /> to BookMyPG
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ "justify-content": "center", display: "flex" }}
                >
                  <Box
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div className={button}>
                      <Typography
                        component="h1"
                        variant="h6"
                        color="secondary.contrastText"
                        gutterBottom
                      >
                        Login to your Account
                      </Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogin}
                        className={buttonmargin}
                      >
                        Signin with Google
                      </Button>
                      <Typography
                        variant="body2"
                        gutterBottom
                        color="primary"
                        style={{ marginTop: "20px" }}
                      >
                        By continuing, you agree to BookMyPG's
                        <Link href="#" gutterBottom>
                          &nbsp;Conditions&nbsp;
                        </Link>
                        <br />
                        of Use and Privacy Notice
                      </Typography>
                      <div
                        color="secondary"
                        gutterBottom
                        style={{
                          marginTop: "40px",
                          alignContent: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ marginTop: "20px" }}></div>
                        <Typography color="secondary.contrastText">
                          Connect with us via
                        </Typography>
                        <div justifyContent="center">
                          <FacebookIcon fontSize="large" />
                          <TwitterIcon fontSize="large" />
                          <EmailIcon fontSize="large" />
                        </div>
                      </div>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
