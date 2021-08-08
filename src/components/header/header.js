import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  DialogContent,
  Dialog,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Container,
  Box,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  CloseIcon,
  MenuIcon,
} from "@material-ui/icons";
import useStyles from "./Header.styles";

export default function Header(props) {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    button,
    buttonmargin,
    mobileviewButton,
  } = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const classes = useStyles();
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
    history.push("/property-list");
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
    return props.headersData.map(({ label, href }) => {
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
    <Typography
      variant="h6"
      component="h1"
      className={logo}
      onClick={() => history.push("/")}
    >
      BookMyPG
    </Typography>
  );

  const searchBar = (
    <Container maxWidth="sm" component="main">
      <Grid container spacing={2} justifyContent="center">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          style={{ width: "400px" }}
        >
          <InputLabel
            id="demo-simple-select-outlined-label"
            style={{ color: "inherit" }}
          >
            Location
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={location}
            onChange={handleChange}
            label="Location"
            style={{ color: "inherit" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Delhi</MenuItem>
            <MenuItem value={20}>Mumbai</MenuItem>
            <MenuItem value={30}>Chennai</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Container>
  );

  const getMenuButtons = () => {
    return props.headersData.map(({ label, href }) => {
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
            <Box display="flex" alignItems="center">
              <Box flexGrow={1}></Box>
              <Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
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
                    <div className={mobileviewButton}>
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
                      like to book your property, make monthly payments, share
                      your reviewes, register your complaints and much more.
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
                  <Box display="flex" alignItems="flex-start">
                    <Box flexGrow={1}></Box>
                    <Box>
                      <IconButton onClick={handleClose}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
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
