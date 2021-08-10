import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Typography, TextField } from "@material-ui/core";
import Tablecomponent from "./AmenityTable";
import Pagination from "../pagination/Pagination";
import Addamenity from "./AddAmenity";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";
import useStyles from "./styles/AmenityListContent.styles";
import AmenitiesSelector from "../../helpers/AmenitiesSelector";
import amenitiesActions from "../../../redux-store/actions/amenitiesActions";
import UserSelector from "../../../user/helpers/UserSelector";

export function AmenityListContent(props) {
  const classes = useStyles();

  useEffect(() => {
    props.resetAmenities();
  }, []);

  useEffect(() => {
    props.getAmenities();
  }, []);

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography component="h1" variant="h5">
              Amenity List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.containerStyle}>
                <TextField
                  id="standard-basic"
                  label="Search by amenity name"
                  className={classes.textfieldStyle}
                />
              </Grid>
              <Addamenity />
            </Grid>
            <Tablecomponent amenities={props.amenities} />
          </Grid>
          <Pagination />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const userSelector = UserSelector(state.user);
  const amenitiesSelector = AmenitiesSelector(state.amenities);

  return {
    user: userSelector.getUserData().data,
    amenities: amenitiesSelector.getAmenitiesData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAmenities: () => dispatch(amenitiesActions.getAmenities()),
    resetAmenities: () => dispatch(amenitiesActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AmenityListContent);
