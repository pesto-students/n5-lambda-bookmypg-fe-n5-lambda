import React from "react";
import { Grid } from "@material-ui/core";
import Tablecomponent from "./AmenityTable";
import Pagination from "../pagination/Pagination";
import Addamenity from "./AddAmenity";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";
import useStyles from "./styles/AmenityListContent.styles";
import Typography from "../../../components/typography/Typography";
import TextField from "../../../components/textfield/Textfield";

export function AmenityListContent(props) {
  const classes = useStyles();
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography type="ListTitle" text="Amenity List" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.containerStyle}>
                <TextField type="standardForm" label="Search by amenity name" />
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
