import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Box,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Dialog from "@material-ui/core/Dialog";
import { Link as RouterLink, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { Facebook, Twitter, Email, Close } from "@material-ui/icons";
import LocationsSelector from "../../helpers/LocationsSelector";
import locationsActions from "../../../redux-store/actions/locationsActions";
import UserSelector from "../../helpers/UserSelector";
import userActions from "../../../redux-store/actions/userActions";
import Button from "../../../components/button/Button";
import useStyles from "./header.styles";

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

export function Header(props) {
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

  const [location, setLocation] = React.useState(props.selectedLocation || "");

  const handleChange = (event) => {
    setLocation(event.target.value);
    props.setSelectedLocation(event.target.value);
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

  useEffect(() => {
    props.resetLocations();
  }, []);

  useEffect(() => {
    props.getLocations();
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
    props.getUser(response.user.email);
    setOpen(false);
    history.push("/");
  };

  const locations = props.locations;

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div className={classes.contentStyle}>{searchBar}</div>
        <div>
          {getMenuButtons()}
          {props.loggedUser == "" ? (
            <Button text="Login" type="Menubutton" handleClick={LoginPopup} />
          ) : (
            <Button
              text="Logout"
              type="Menubutton"
              handleClick={handleLogout}
            />
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
        <div className={classes.contentStyle}>{searchBar}</div>
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
            variant="outlined"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          >
            <MenuItem value="All">
              <em>All</em>
            </MenuItem>
            {locations &&
              locations.length &&
              locations.map((location) => (
                <MenuItem value={location.name}>{location.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Container>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          text={label}
          type="Menubutton"
          component={RouterLink}
          to={href}
        />
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
                  <Close />
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
                        text="Signin with Google"
                        handelClick={handleLogin}
                      />
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
                          <Facebook fontSize="large" />
                          <Twitter fontSize="large" />
                          <Email fontSize="large" />
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
                        text="Signin with Google"
                        handelClick={handleLogin}
                      />
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
                          <Facebook fontSize="large" />
                          <Twitter fontSize="large" />
                          <Email fontSize="large" />
                        </div>
                      </div>
                    </div>
                  </Box>
                  <Box display="flex" alignItems="flex-start">
                    <Box flexGrow={1}></Box>
                    <Box>
                      <IconButton onClick={handleClose}>
                        <Close />
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

const mapStateToProps = (state) => {
  const locationsSelector = LocationsSelector(state.locations);
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
    locations: locationsSelector.getLocationsData().data,
    selectedLocation: locationsSelector.getSelectedLocation().selectedLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (payload) => dispatch(userActions.getUser(payload)),
    getLocations: () => dispatch(locationsActions.getLocations()),
    setSelectedLocation: (payload) =>
      dispatch(locationsActions.setSelectedLocation(payload)),
    getSelectedLocation: () => dispatch(locationsActions.getSelectedLocation()),
    resetLocations: () => dispatch(locationsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
