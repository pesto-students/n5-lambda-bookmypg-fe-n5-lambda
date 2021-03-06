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
  ListItemIcon,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Button from "components/button/Button";
import useStyles from "./header.styles";
import TenantsSelector from "../../../owner/components/TenantsSelector";
import tenantsActions from "../../../redux-store/actions/tenantsActions";
import PopupMenu from "components/popupmenu/PopupMenu";
import SigninButton from "@material-ui/core/Button";
import FormImage from "components/formimage/FormImage";
import Icon from "components/icon/Icon";
import { GUEST_EMAIL } from "../../../constant";

let UserHeadersData = [
  {
    label: "Home",
    href: "/",
    icon: "Home",
  },
  {
    label: "About us",
    href: "/about",
    icon: "About",
  },
];

const OwnerHeadersData = [
  {
    label: "Dashboards",
    href: "/owner-property-list",
    icon: "Dashboard",
  },
  {
    label: "About us",
    href: "/about",
    icon: "About",
  },
];

const AdminHeadersData = [
  {
    label: "Dashboards",
    href: "/owner-list",
    icon: "Dashboard",
  },
  {
    label: "About us",
    href: "/about",
    icon: "About",
  },
];

const listitems = [
  {
    label: "My Profile",
    href: "/myprofile",
    icon: "Profile",
  },
  {
    label: "Logout",
    href: "/",
  },
];

export function Header(props) {
  const { header, logo, toolbar, drawerContainer, button, mobileviewButton } =
    useStyles();
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
    props.verifyAdmin();
  }, []);

  const LoginPopup = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    props.logoutUser();
    history.push("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
    props.getUser(response.user.email);
    const existingUser = props.tenants.filter(
      (tenant) => tenant.email === response.user.email
    )[0];
    setOpen(false);
    if (existingUser) {
      existingUser.role === "owner"
        ? history.push("/owner-property-list")
        : existingUser.role === "admin"
        ? history.push("/owner-list")
        : history.push("/");
    } else {
      history.push("/");
    }
  };

  const handleGuestLogin = async (userType) => {
    let email;
    if(userType === "owner"){
      email = GUEST_EMAIL.OWNER;
    } else if(userType === "admin"){
      email = GUEST_EMAIL.ADMIN;
    } else {
      email = GUEST_EMAIL.USER;
    }
    props.getUser(email);
    const existingUser = props.tenants.filter(
      (tenant) => tenant.email === email
    )[0];
    setOpen(false);
    if (existingUser) {
      existingUser.role === "owner"
        ? history.push("/owner-property-list")
        : existingUser.role === "admin"
        ? history.push("/owner-list")
        : history.push("/");
      toast("You have logged in successfully!!");
    } else {
      history.push("/");
    }
  }

  const locations = props.locations;

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div className={classes.contentStyle}>{searchBar}</div>
        <div>
          {getMenuButtons()}
          {!props.user || Object.keys(props.user).length === 0 ? (
            <Button text="Login" type="Menubutton" handleClick={LoginPopup} />
          ) : (
            <>
              <Button
                text={props.user.firstName + " " + props.user.lastName}
                type="Menubutton"
                // handleClick={handleLogout}
              />
              <PopupMenu listitems={listitems} handleLogout={handleLogout} />
            </>
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
            {!props.user || Object.keys(props.user).length === 0 ? (
              <Link
                key={"Login"}
                {...{
                  color: "inherit",
                  style: { textDecoration: "none" },
                }}
                onClick={LoginPopup}
              >
                <MenuItem className={classes.menuitemStyle}>
                  <ListItemIcon className={classes.listitemStyle}>
                    <Icon type="Login" />
                  </ListItemIcon>
                  {"Login"}
                </MenuItem>
              </Link>
            ) : (
              <div>
                <Link
                  key={"MyProfile"}
                  {...{
                    color: "inherit",
                    style: { textDecoration: "none" },
                    component: RouterLink,
                    to: "/myprofile",
                  }}
                  onClick={handleLogout}
                >
                  {" "}
                  <MenuItem className={classes.menuitemStyle}>
                    <ListItemIcon className={classes.listitemStyle}>
                      <Icon type="Profile" />
                    </ListItemIcon>
                    {"My Profile"}
                  </MenuItem>
                </Link>
                <Link
                  key={"Logout"}
                  {...{
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  onClick={handleLogout}
                >
                  <MenuItem className={classes.menuitemStyle}>
                    <ListItemIcon className={classes.listitemStyle}>
                      <Icon type="Login" />
                    </ListItemIcon>
                    {"Logout"}
                  </MenuItem>
                </Link>
              </div>
            )}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <div className={classes.contentStyle}>{searchBar}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    let HeadersData;
    if (props.user && props.user.role === "owner")
      HeadersData = OwnerHeadersData;
    else if (props.user && props.user.role === "admin")
      HeadersData = AdminHeadersData;
    else HeadersData = UserHeadersData;
    return HeadersData.map(({ label, href, icon }) => {
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
          <MenuItem className={classes.menuitemStyle}>
            <ListItemIcon className={classes.listitemStyle}>
              <Icon type={icon} />
            </ListItemIcon>
            {label}
          </MenuItem>
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
        <FormControl className={classes.formControl}>
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
            className={classes.textfieldStyle}
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}
            style={{ color: "inherit" }}
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
    let HeadersData;
    if (props.user && props.user.role === "owner")
      HeadersData = OwnerHeadersData;
    else if (props.user && props.user.role === "admin")
      HeadersData = AdminHeadersData;
    else HeadersData = UserHeadersData;
    return HeadersData.map(({ label, href }) => {
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
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <Box
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div className={mobileviewButton}>
                    <SigninButton
                        onClick={()=>handleGuestLogin("user")}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        {" "}
                        Signin with Guest User
                      </SigninButton>
                      &nbsp;&nbsp;
                      <SigninButton
                        onClick={()=>handleGuestLogin("owner")}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        {" "}
                        Signin with Guest Owner
                      </SigninButton>
                      &nbsp;&nbsp;
                      <SigninButton
                        onClick={()=>handleGuestLogin("admin")}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        {" "}
                        Signin with Guest Admin
                      </SigninButton>
                      &nbsp;&nbsp;
                      <SigninButton
                        onClick={handleLogin}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        <FormImage imageName="GoogleIcon.png" type="icon" />
                        Signin with Google
                      </SigninButton>
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
                <Grid item xs={12} sm={6} className={classes.backgroundStyle}>
                  <Box
                    color="primary.contrastText"
                    height="100%"
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    className={classes.boxStyle}
                  >
                    <FormImage
                      imageName="BookMyPG-Logo.jpg"
                      type="loginpageLogo"
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
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <Box
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div className={button}>
                      <SigninButton
                        onClick={()=>handleGuestLogin("user")}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        {" "}
                        Signin with Guest User
                      </SigninButton>
                      &nbsp;&nbsp;
                      <SigninButton
                        onClick={()=>handleGuestLogin("owner")}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        {" "}
                        Signin with Guest Owner
                      </SigninButton>
                      &nbsp;&nbsp;
                      <SigninButton
                        onClick={()=>handleGuestLogin("admin")}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        {" "}
                        Signin with Guest Admin
                      </SigninButton>
                      &nbsp;&nbsp;
                      <SigninButton
                        onClick={handleLogin}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        {" "}
                        <FormImage imageName="GoogleIcon.png" type="icon" />
                        Signin with Google
                      </SigninButton>
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
      <ToastContainer />
    </>
  );
}

const mapStateToProps = (state) => {
  const locationsSelector = LocationsSelector(state.locations);
  const userSelector = UserSelector(state.user);
  const tenantsSelector = TenantsSelector(state.tenants);

  return {
    user: userSelector.getUserData().data,
    locations: locationsSelector.getLocationsData().data,
    selectedLocation: locationsSelector.getSelectedLocation().selectedLocation,
    tenants: tenantsSelector.getTenantsData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (payload) => dispatch(userActions.getUser(payload)),
    getLocations: () => dispatch(locationsActions.getLocations()),
    setSelectedLocation: (payload) =>
      dispatch(locationsActions.setSelectedLocation(payload)),
    getSelectedLocation: () => dispatch(locationsActions.getSelectedLocation()),
    verifyAdmin: () => dispatch(tenantsActions.getTenants()),
    resetLocations: () => dispatch(locationsActions.resetState()),
    logoutUser: () => dispatch(userActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
