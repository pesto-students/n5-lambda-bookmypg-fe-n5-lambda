import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
  Grid,
  Box,
  Dialog,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./header.styles";
import UserSelector from "../../../user/helpers/UserSelector";
import userActions from "../../../redux-store/actions/userActions";

const headersData = [
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];

const responsiveHeaderData = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "My Properties",
    href: "/myproperties",
  },
  {
    label: "Tenants",
    href: "/tenants-list",
  },
  {
    label: "Complaints",
    href: "/complaints",
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
    history.push("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
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
              key={props.user.firstName + " " + props.user.lastName}
              {...{
                color: "inherit",
                className: menuButton,
              }}
              onClick={handleLogout}
            >
              {props.user.firstName + " " + props.user.lastName}
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
            {getrespDrawerChoices()}
            {!props.user || Object.keys(props.user).length === 0 ? (
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
                key={props.user.firstName + " " + props.user.lastName}
                {...{
                  color: "inherit",
                  className: menuButton,
                }}
                onClick={handleLogout}
              >
                {props.user.firstName + " " + props.user.lastName}
              </Button>
            )}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
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
  const getrespDrawerChoices = () => {
    return responsiveHeaderData.map(({ label, href }) => {
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
            <Box display="flex" alignItems="center">
              <Box flexGrow={1}></Box>
              <Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            <DialogContent className={classes.dialogStyle}>
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
                        className={classes.textStyle}
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
                        <div className={classes.textStyle}></div>
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
            <DialogContent className={classes.dialogStyle}>
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
                <Grid item xs={12} sm={6} className={classes.loginboxStyle}>
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
                        className={classes.textStyle}
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