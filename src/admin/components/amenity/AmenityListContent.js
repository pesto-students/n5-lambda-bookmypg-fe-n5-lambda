import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import Tablecomponent from "./AmenityTable";
import Pagination from "../pagination/Pagination";
import Addamenity from "./AddAmenity";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";
import useStyles from "./styles/AmenityListContent.styles";

export function AmenityListContent(props) {
  const classes = useStyles();
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
            <Tablecomponent complaints={props.complaints} />
          </Grid>
          <Pagination />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

export default AmenityListContent;
