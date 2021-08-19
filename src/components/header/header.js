import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  DialogContent,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Dialog from "@material-ui/core/Dialog";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { get } from "lodash";
import firebase from "firebase/app";
import "firebase/auth";
import { Facebook, Twitter, Email, Close } from "@material-ui/icons";
import Button from "components/button/Button";
import useStyles from "./header.styles";
import PopupMenu from "components/popupmenu/PopupMenu";
import SigninButton from "@material-ui/core/Button";
import UserSelector from "../../user/helpers/UserSelector";
import userActions from "../../redux-store/actions/userActions";
import FormImage from "components/formimage/FormImage";
import { useAuth } from "../../contexts/AuthContext";

export function Header(props) {
  const { header, logo, toolbar, drawerContainer, button, mobileviewButton } =
    useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const listitems = [
    {
      label: "My Profile",
      href: "/myprofile",
    },
    {
      label: "Logout",
      href: "/",
    },
  ];

  const classes = useStyles();

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
    setOpen(false);
    history.push("/");
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>
          {getMenuButtons()}
          {!props.user || Object.keys(props.user).length === 0 ? (
            <Button text="Login" type="Menubutton" handleClick={LoginPopup} />
          ) : (
            <>
              <Button
                text={props.user.firstName + " " + props.user.lastName}
                type="Menubutton"
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
            {mobileView ? getresDrawerChoices() : getDrawerChoices()}
            {!props.user || Object.keys(props.user).length === 0 ? (
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
                  <MenuItem>{"My Profile"}</MenuItem>
                </Link>
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
              </div>
            )}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    if (get(props, "headersData.length"))
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

  const getresDrawerChoices = () => {
    return props.responsiveHeaderData.map(({ label, href }) => {
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

  const getMenuButtons = () => {
    if (get(props, "headersData.length"))
      return props.headersData.map(({ label, href }) => {
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
                <Grid item xs={12} className={classes.loginboxStyle}>
                  <Box
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div className={mobileviewButton}>
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
                        className={classes.connectusStyle}
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
                <Grid item xs={12} sm={6} className={classes.loginboxStyle}>
                  <Box
                    p={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div className={button}>
                      <SigninButton
                        onClick={handleLogin}
                        variant="contained"
                        color="secondary"
                        key="Signin"
                      >
                        <FormImage imageName="GoogleIcon.png" type="icon" />{" "}
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
                        className={classes.connectusStyle}
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
  const userSelector = UserSelector(state.user);
  return {
    user: userSelector.getUserData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (payload) => dispatch(userActions.getUser(payload)),
    logoutUser: () => dispatch(userActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
