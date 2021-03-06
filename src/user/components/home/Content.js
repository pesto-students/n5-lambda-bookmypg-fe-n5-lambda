import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, ImageList, ImageListItem } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import PropertiesSelector from "../../helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import Similarproperties from "../similarproperties/similarproperties";
import useStyles from "./Content.styles";
import { S3_BUCKET_IMAGES_BASEURL } from "constant";
import TypographyComponent from "components/typography/Typography";

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
            <TypographyComponent
              type="ListTitle"
              align="center"
              text="Who are we?"
            />

            <TypographyComponent
              type="FormTitle"
              align="center"
              text="We provide a common platform for both property owners to share their property details and Paying Guests to find suitable property
              and make monthly rent payments with one-click hassle-free payment
              facility. We also allow Paying Guests to share their reviews and
              raise complaints from our platform."
            />
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
            <TypographyComponent
              type="ListTitle"
              align="center"
              text="What are we aiming at?"
            />
            <TypographyComponent
              type="FormTitle"
              align="center"
              text="Our aim is to allow Paying Guests to search properties available in
              more than 15 cities of India and explore all the amenities
              available at the properties along with the photos and find a cozy
              home. We allow Paying Guests to schedule a visit to the property
              before booking it and once booked they can make monthly rent
              payments from the platform."
            />
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
