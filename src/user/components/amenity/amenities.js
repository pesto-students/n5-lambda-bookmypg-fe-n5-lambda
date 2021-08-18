import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { S3_BUCKET_URL } from "../../../constant";
import useStyles from "./amenities.styles";
import FormImage from "components/formimage/FormImage";

export default function CenteredGrid(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.containerStyle}>
        {props.amenities &&
          props.amenities.length &&
          props.amenities.map((amenity) => (
            <Grid item xs={4}>
              <Box display="flex" p={2} pt={0}>
                <FormImage
                  imageName={`${S3_BUCKET_URL}/${amenity.logo}`}
                  type="logo"
                />

                <Typography
                  component="h1"
                  variant="body1"
                  color="secondary"
                  align="justify"
                >
                  {amenity.name}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
}
