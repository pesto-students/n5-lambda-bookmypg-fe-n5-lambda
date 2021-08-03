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
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import NativeSelect from "@material-ui/core/NativeSelect";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import Login from "../views/Login";

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
  paper: { height: "70%", width: "65%" },

  root: {
    background:
      "linear-gradient(to right top, #141314, #1a1a1a, #202020, #262627, #2d2d2d, #2f2f2f, #313132, #333334, #313132, #2f2f30, #2e2d2e, #2c2b2c);",
  },
  titleStyle: {
    width: "70%",
    textAlign: "center",
    marginTop: "10px",
  },
  descriptionStyle: {
    width: "70%",
    textAlign: "center",
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
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const classes = useStyles();
  const history = useHistory();
  const classesselect = useStylesselect();

  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
    history.push("/propertylist");
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

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div className={classesselect.heroContent}>{searchBar}</div>
        <div>
          {getMenuButtons()}
          <Login
            loggedUser={props.loggedUser}
            setLoggedUser={props.setLoggedUser}
          />
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
          <div className={drawerContainer}>{getDrawerChoices()}</div>
          <Login
            loggedUser={props.loggedUser}
            setLoggedUser={props.setLoggedUser}
          />
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
                      className={classes.descriptionStyle}
                    >
                      Be the member of BookMyPG for the exclusive facilities
                      like to book your property, monthly rent payments, share
                      your reviews, register yor complaints and much more.
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
