import React from "react";
import { Grid, Typography, ImageList, ImageListItem } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "./AboutUs.styles";
import { S3_BUCKET_IMAGES_BASEURL } from "constant";
import Card from "components/card/Card";

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
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Struggling to find a new accomodation??
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

        <Grid container className={classes.paddingStyle}>
          <Grid item>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              paragraph
              align="center"
            >
              BookMyPG is a platform to facilitate PG-Owner to advertise his
              property and find easily paying guest for his property and Paying
              guests to find a home-like accomodation. We value our users and
              their needs. Our services are not only limited to finding an
              accomodation. We provide our users the platform to make payments
              every month, raise complaints while their stay and shar their
              reviews and experience.
            </Typography>
          </Grid>
        </Grid>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12}>
              <Typography
                component="h1"
                variant="h4"
                color="primary"
                gutterBottom
                align="center"
              >
                Our Services
              </Typography>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={3}>
                  <Card
                    type="AboutUs"
                    title="Post your Property"
                    imageName="abt-3.png"
                    description="Share your property details with us and we will help you find the Paying guests for your property."
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Card
                    type="AboutUs"
                    title="Find a cozy Accomodation"
                    imageName="abt-4.png"
                    description="Explore various properties available at your location. Schdule a visit and book it from our platform."
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Card
                    type="AboutUs"
                    title="One click Payments"
                    imageName="abt-5.jpg"
                    description="We allow paying guests to make easy and hasselfree payments on one click from our platform."
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Card
                    type="AboutUs"
                    title="We value our Users"
                    imageName="abt-2.jpg"
                    description="We allow our user to share his experience by sharing the reviews of the property he stayed at. Also we assure you that your complaints will be attended by the PG-Owner and resolved."
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          <Grid item>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                textAlign: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                color="primary"
                gutterBottom
                align="center"
              >
                Our Vision
              </Typography>

              <img
                src={`${S3_BUCKET_IMAGES_BASEURL}/AboutusImg.jpg`}
                alt={"Not available"}
                style={{ maxWidth: "500px" }}
              />
            </Grid>

            <Grid container className={classes.paddingStyle}>
              <Typography
                component="h1"
                variant="h6"
                color="secondary"
                paragraph
                align="center"
              >
                Our aim is to provide easy and hasselfree services to both
                PG-Owners and users. We are here to solve a most common problem
                of house hunting that a person faces when he moves in to a new
                location. We connect PG-Owners and users to solve their needs of
                finding paying guests for the property and finding a cozy
                accomodation respectively.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Content;
