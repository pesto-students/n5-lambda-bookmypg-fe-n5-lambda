import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import Propertylistcontent from "./PropertyListContent";
import PropertiesSelector from "../../helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import LocationsSelector from "../../helpers/LocationsSelector";
import locationsActions from "../../../redux-store/actions/locationsActions";
import useStyles from "./styles/PropertyFilters.styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "components/typography/Typography";

function PropertyFilters(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [sortvalue, setSortvalue] = React.useState("");

  const handleClick = (event) => {
    setSortvalue(event.target.value);
  };

  const [gender, setGender] = React.useState({
    male: false,
    female: false,
    other: false,
  });

  const [rating, setRating] = React.useState({
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  const [rent, setRent] = React.useState({
    zeroRent: false,
    oneRent: false,
    twoRent: false,
  });

  const [pagenumber, setPagenumber] = React.useState(0);
  const [countperpage, setCountperpage] = React.useState(10);

  useEffect(() => {
    const selectedGender = [];
    if (gender.male) selectedGender.push("male");
    if (gender.female) selectedGender.push("female");
    if (gender.other) selectedGender.push("other");

    const selectedRating = [];
    if (rating.threeStars) selectedRating.push("3");
    if (rating.fourStars) selectedRating.push("4");
    if (rating.fiveStars) selectedRating.push("5");

    const selectedRent = [];
    if (rent.twoRent) selectedRent.push("2");
    if (rent.oneRent) selectedRent.push("1");
    if (rent.zeroRent) selectedRent.push("0");

    const search =
      props.selectedLocation === "All" || props.selectedLocation === ""
        ? ""
        : props.selectedLocation;

    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&gender=${selectedGender}&rating=${selectedRating}&rent=${selectedRent}`;
    props.getProperties({ extraParams });
  }, [pagenumber, countperpage, gender, rating, rent, props.selectedLocation]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.toolbar}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          Sort by: Price
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sortvalue}
          onChange={handleClick}
        >
          <MenuItem>Price low to high</MenuItem>
          <MenuItem>Price high to low</MenuItem>
        </Select>
      </FormControl>
      <div className={classes.typographyStyle}>
        <Typography type="SubTitleText" text="Filter Results" />
        <Divider />
      </div>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.male}
                onChange={() =>
                  setGender({
                    male: !gender.male,
                    female: gender.female,
                    other: gender.other,
                  })
                }
                name="male"
              />
            }
            label={<span className={classes.labelStyle}>{"Male"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.female}
                onChange={() =>
                  setGender({
                    male: gender.male,
                    female: !gender.female,
                    other: gender.other,
                  })
                }
                name="female"
              />
            }
            label={<span className={classes.labelStyle}>{"Female"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.other}
                onChange={() =>
                  setGender({
                    male: gender.male,
                    female: gender.female,
                    other: !gender.other,
                  })
                }
                name="other"
              />
            }
            label={<span className={classes.labelStyle}>{"Other"}</span>}
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
                checked={rating.fiveStars}
                onChange={() =>
                  setRating({
                    threeStars: rating.threeStars,
                    fourStars: rating.fourStars,
                    fiveStars: !rating.fiveStars,
                  })
                }
                name="fiveStars"
              />
            }
            label={<span className={classes.labelStyle}>{"5 Stars"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rating.fourStars}
                onChange={() =>
                  setRating({
                    threeStars: rating.threeStars,
                    fourStars: !rating.fourStars,
                    fiveStars: rating.fiveStars,
                  })
                }
                name="fourStars"
              />
            }
            label={<span className={classes.labelStyle}>{"4 Stars"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rating.threeStars}
                onChange={() =>
                  setRating({
                    threeStars: !rating.threeStars,
                    fourStars: rating.fourStars,
                    fiveStars: rating.fiveStars,
                  })
                }
                name="threeStars"
              />
            }
            label={<span className={classes.labelStyle}>{"3 Stars"}</span>}
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
                checked={rent.twoRent}
                onChange={() =>
                  setRent({
                    zeroRent: rent.zeroRent,
                    oneRent: rent.oneRent,
                    twoRent: !rent.twoRent,
                  })
                }
                name="twoRent"
              />
            }
            label={<span className={classes.labelStyle}>{">15000"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rent.oneRent}
                onChange={() =>
                  setRent({
                    zeroRent: rent.zeroRent,
                    oneRent: !rent.oneRent,
                    twoRent: rent.twoRent,
                  })
                }
                name="oneRent"
              />
            }
            label={<span className={classes.labelStyle}>{"10000-15000"}</span>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rent.zeroRent}
                onChange={() =>
                  setRent({
                    zeroRent: !rent.zeroRent,
                    oneRent: rent.oneRent,
                    twoRent: rent.twoRent,
                  })
                }
                name="zeroRent"
              />
            }
            label={<span className={classes.labelStyle}>{"<10000"}</span>}
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
              <SortIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
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
                keepMounted: true,
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
  const locationsSelector = LocationsSelector(state.locations);

  return {
    properties: propertiesSelector.getPropertiesData().data,
    selectedLocation: locationsSelector.getSelectedLocation().selectedLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: (payload) =>
      dispatch(propertiesActions.getProperties(payload)),
    getSelectedLocation: () => dispatch(locationsActions.getSelectedLocation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFilters);
