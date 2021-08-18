import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Typography, ImageList, ImageListItem } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import PropertiesSelector from "../../helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import Similarproperties from "../similarproperties/similarproperties";
import useStyles from "./Content.styles";
import { S3_BUCKET_IMAGES_BASEURL } from "constant";

export function Content(props) {
  const classes = useStyles();

  useEffect(() => {
    props.resetProperties();
    props.resetLatestProperties();
  }, []);

  useEffect(() => {
    props.getProperties();
    props.getLatestProperties();
  }, []);

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} className={classes.topPadding}>
          <Grid item xs={12} sm={6}>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
              align="center"
            >
              Who are we?
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              paragraph
              align="center"
            >
              We provide a common platform for both a property owner to share
              his property details and Paying Guest to find suitable property
              and make monthly rent payments with one-click hassle-free payment
              facility. We also allow paying guests to share his reviews and
              raise complaints from our platform.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageList cols={1}>
              <ImageListItem style={{ height: "300px" }}>
                <img
                  src={`${S3_BUCKET_IMAGES_BASEURL}/Aboutus-5.jpg`}
                  alt={"Not available"}
                />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ImageList cols={1}>
              <ImageListItem style={{ height: "300px" }}>
                <img
                  src={`${S3_BUCKET_IMAGES_BASEURL}/Aboutus-10.jpg`}
                  alt={"Not available"}
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
              align="center"
            >
              What are we aiming at?
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              paragraph
              align="center"
            >
              Our aim is to allow Paying guest to search properties available in
              more than 15 cities of India and explore all the amenities
              available at the properties along with the photos and find a cozy
              home. We allow Paying guests to schedule a visit to the property
              before booking it and once booked they can make monthly rent
              payments from the platform.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Similarproperties
          title={"Recently Added Properties"}
          latestProperties={props.latestProperties}
        />
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);

  return {
    properties: propertiesSelector.getPropertiesData().data,
    latestProperties: propertiesSelector.getLatestPropertiesData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => dispatch(propertiesActions.getProperties()),
    getLatestProperties: () =>
      dispatch(propertiesActions.getLatestProperties()),
    resetProperties: () => dispatch(propertiesActions.resetState()),
    resetLatestProperties: () =>
      dispatch(propertiesActions.resetLatestPropertiesState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
