import React from "react";
import { Grid, Typography, ImageList, ImageListItem } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "./AboutUs.styles";
import { S3_BUCKET_IMAGES_BASEURL } from "constant";
import theme from "theme/theme";
import SimpleCard from "components/card/Card";

export function Content(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container className={classes.topPadding}>
          <Grid
            item
            xs={12}
            sm={12}
            style={{
              //backgroundColor: theme.palette.primary.light,
              //backgroundImage: `url(${S3_BUCKET_IMAGES_BASEURL}/Aboutus-5.jpg)`,
              //backgroundSize: "cover",
              //backgroundPosition: "center",
              //background: "linear-gradient(to bottom, #232526, #414345)",
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Struggling to find accomodation in new Location???
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              color="primary"
              gutterBottom
            >
              We are here to help you finding a Home
            </Typography>
            <img
              src={`${S3_BUCKET_IMAGES_BASEURL}/SearchImage.jpg`}
              alt={"Not available"}
              style={{ maxWidth: "300px" }}
            />
            <div
              style={
                {
                  //background: "linear-gradient(to bottom, #232526, #414345)",
                }
              }
            ></div>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item>
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
              experience.Our aim and motto are simple and singular. To provide
              the guests with a PG that feels like home best fitting their needs
              and the homeowners a guest who fits right in. To attain this we
              work with homeowners and guests to give everyone involved the best
              possible experience.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          className={classes.topPadding}
          style={{ background: theme.palette.primary.light }}
        >
          <Grid item xs={12} sm={12}>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Our Services
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={3}>
                <SimpleCard
                  type="SimpleCard"
                  title="Post your Property"
                  description="Share your property details with us and we will help you find the Paying guests for your property."
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <SimpleCard
                  type="SimpleCard"
                  title="Find a cozy Accomodation"
                  description="Explore various properties available at your location. Schdule a visit and book it from our platform."
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <SimpleCard
                  type="SimpleCard"
                  title="Make easy one click Payments"
                  description="We allow paying guests to make easy and hasselfree payments on one click from our platform."
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <SimpleCard
                  type="SimpleCard"
                  title="We value our Users"
                  description="Share your reviews and raise our complaints. We allow our user to share his experience by sharing the reviews of the proeprty he stayed at. Also we assure you that your complaints will be attended by the PG-Owner and resolved."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ImageList cols={1}>
              <ImageListItem style={{ height: "400px" }}>
                <img
                  src={`${S3_BUCKET_IMAGES_BASEURL}/Aboutus-8.jpg`}
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
              experience.Our aim and motto are simple and singular. To provide
              the guests with a PG that feels like home best fitting their needs
              and the homeowners a guest who fits right in. To attain this we
              work with homeowners and guests to give everyone involved the best
              possible experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Content;
