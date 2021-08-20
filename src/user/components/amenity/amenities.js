import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { S3_BUCKET_URL } from "../../../constant";
import useStyles from "./amenities.styles";
import FormImage from "components/formimage/FormImage";
import Typography from "components/typography/Typography";

export default function CenteredGrid(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.containerStyle}>
        {props.amenities &&
          props.amenities.length &&
          props.amenities.map((amenity) => (
            <Grid item xs={6}>
              <Box display="flex" p={1} pt={0}>
                <FormImage
                  imageName={`${S3_BUCKET_URL}/${amenity.logo}`}
                  type="logo"
                />
                <Typography type="Body" text={amenity.name} />
              </Box>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
}
