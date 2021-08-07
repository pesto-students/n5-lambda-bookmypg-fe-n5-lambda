import React, { useEffect } from "react";
import { connect } from "react-redux";
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
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SortIcon from "@material-ui/icons/Sort";

import Propertylistcontent from "./Propertylistcontent";
import PropertiesSelector from "../components/PropertiesSelector";
import propertiesActions from "../../redux-store/actions/propertiesActions";

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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "150px",
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
  searchsortButtons: {
    justifyContent: "flex-end",
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  //toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: "60px",
  },
  content: {
    flexGrow: 1,
    flexDirection: "column",
    padding: theme.spacing(3),
    paddingTop: "70px",
  },
  searchbox: {
    height: "25px",
  },
}));

function PropertyFilters(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const [male, setMale] = React.useState(false);
  const [female, setFemale] = React.useState(false);
  const [other, setOther] = React.useState(false);

  const [threeStars, setThreeStars] = React.useState(false);
  const [fourStars, setFourStars] = React.useState(false);
  const [fiveStars, setFiveStars] = React.useState(false);

  const [zeroRent, setZeroRent] = React.useState(false);
  const [oneRent, setOneRent] = React.useState(false);
  const [twoRent, setTwoRent] = React.useState(false);

  const [pagenumber, setPagenumber] = React.useState(1);
  const [countperpage, setCountperpage] = React.useState(10);

  useEffect(() => {
    const gender = [];
    if (male) gender.push("male");
    if (female) gender.push("female");
    if (other) gender.push("other");

    const rating = [];
    if (threeStars) rating.push("3");
    if (fourStars) rating.push("4");
    if (fiveStars) rating.push("5");

    const rent = [];
    if (twoRent) rent.push("2");
    if (oneRent) rent.push("1");
    if (zeroRent) rent.push("0");

    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&gender=${gender}&rating=${rating}&rent=${rent}`;
    console.log("extraParams", extraParams);
    props.getProperties({ extraParams });
  }, [
    pagenumber,
    countperpage,
    male,
    female,
    other,
    threeStars,
    fourStars,
    fiveStars,
    zeroRent,
    oneRent,
    twoRent,
  ]);

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
          <FormControlLabel
            control={
              <Checkbox
                checked={male}
                onChange={() => setMale(!male)}
                name="male"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"Male"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={female}
                onChange={() => setFemale(!female)}
                name="female"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"Female"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={other}
                onChange={() => setOther(!other)}
                name="other"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"Other"}</span>}
          />
        </FormGroup>
      </FormControl>
      <Divider />

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Ratings</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={fiveStars}
                onChange={() => setFiveStars(!fiveStars)}
                name="fiveStars"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"5 Stars"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={fourStars}
                onChange={() => setFourStars(!fourStars)}
                name="fourStars"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"4 Stars"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={threeStars}
                onChange={() => setThreeStars(!threeStars)}
                name="threeStars"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"3 Stars"}</span>}
          />
        </FormGroup>
      </FormControl>
      <Divider />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Monthly rent</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={twoRent}
                onChange={() => setTwoRent(!twoRent)}
                name="twoRent"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{">15000"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={oneRent}
                onChange={() => setOneRent(!oneRent)}
                name="oneRent"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"10000-15000"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={zeroRent}
                onChange={() => setZeroRent(!zeroRent)}
                name="zeroRent"
              />
            }
            label={<span style={{ fontSize: "14px" }}>{"<10000"}</span>}
          />
        </FormGroup>
      </FormControl>
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
            <div className={classes.searchsortButtons}>
              <div>
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <SortIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Price low to high</MenuItem>
                  <MenuItem onClick={handleClose}>Price high to low</MenuItem>
                </Menu>
              </div>
            </div>
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
          <Propertylistcontent
            getProperties={props.getProperties}
            pagenumber={pagenumber}
            setPagenumber={setPagenumber}
            properties={props.properties}
          />
        </main>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);

  return {
    properties: propertiesSelector.getPropertiesData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: (payload) =>
      dispatch(propertiesActions.getProperties(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFilters);
