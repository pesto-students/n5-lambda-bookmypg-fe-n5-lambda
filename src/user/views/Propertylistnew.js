import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Propertylistcontent from "./Propertylistcontent";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    marginTop: "80px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  formControl: {
    margin: theme.spacing(1),
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginTop: "60px",
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: "60px",
  },
  content: {
    flexGrow: 1,
    flexDirection: "column",
    padding: theme.spacing(3),
  },
  searchbox: {
    height: "25px",
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  console.log(error);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Typography component="body2" variant="h6" color="secondary">
        Filter results
      </Typography>
      <Divider />

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <FormGroup>
          {["Male", "Female", "Other"].map((text, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label={<span style={{ fontSize: "14px" }}>{text}</span>}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Divider />

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Ratings</FormLabel>
        <FormGroup>
          {[
            "Highest Rated",
            "Most Reviewed",
            "5 Stars",
            "4 Stars",
            "3 Stars",
          ].map((text, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label={<span style={{ fontSize: "14px" }}>{text}</span>}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Divider />

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Location</FormLabel>
        <FormGroup>
          {["Mumbai", "Delhi", "Chennai"].map((text, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label={<span style={{ fontSize: "14px" }}>{text}</span>}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Divider />

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Monthly rent</FormLabel>
        <FormGroup>
          {[">15000", "10000-15000", "<10000"].map((text, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label={<span style={{ fontSize: "14px" }}>{text}</span>}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Divider />

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Amenitiest</FormLabel>
        <FormGroup>
          {["Airconditioner", "Washing machine", "Veg food", "Nonveg food"].map(
            (text, index) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label={<span style={{ fontSize: "14px" }}>{text}</span>}
              />
            )
          )}
        </FormGroup>
      </FormControl>
      <Divider />
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <TextField id="standard-basic" label="Search" />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Propertylistcontent />
        </main>
      </div>
    </React.Fragment>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
