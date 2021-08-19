import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Typography, ImageList, ImageListItem } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import PropertiesSelector from "../../helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import Similarproperties from "../similarproperties/similarproperties";
import useStyles from "./Content.styles";

export function Content(props) {
  const classes = useStyles();

  useEffect(() => {
    props.resetProperties();
  }, []);

  useEffect(() => {
    props.getProperties();
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
            >
              Who are we?
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              paragraph
              align="justify"
            >
              This platform is to facilitate both a property owner to share his
              property details and Paying Guest to find suitable property with
              one-click hassle-free payments.This platform is to facilitate both
              a property owner to share.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageList cols={1}>
              <ImageListItem>
                <img src="images/Hostel Images/img.jpg" alt={"Not available"} />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ImageList cols={1}>
              <ImageListItem>
                <img src="images/Hostel Images/1.jpg" alt={"Not available"} />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              What are we aiming at?
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              paragraph
              align="justify"
            >
              Our aim and motto are simple and singular. To provide the guests
              with a PG that feels like home best fitting their needs and the
              homeowners a guest who fits right in. To attain this we work with
              homeowners and guests to give everyone involved the best possible
              experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Similarproperties
          title={"Popular properties"}
          properties={props.properties}
        />
      </Container>
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
    getProperties: () => dispatch(propertiesActions.getProperties()),
    resetProperties: () => dispatch(propertiesActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
