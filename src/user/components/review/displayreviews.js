import React from "react";
import { Grid, Box, Typography, Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles/DisplayReview.styles";
import ReviewBar from "components/progressbar/Progressbar";

export default function DisplayReviewContent(props) {
  const reviews = [
    {
      rating: "5",
      discription:
        "Awsome Property! Very pleasent stay and quite clean place. Also got very quick services by Owner to my any complaints.",
      reviewedby: "Monali Doshi",
      createdby: "12/07/2021",
    },
    {
      rating: "4",
      discription:
        "Amazing Property! Owner was very helpful in case of any complaints",
      reviewedby: "Mike",
      createdby: "18/07/2021",
    },
    {
      rating: "4",
      discription:
        "Pleasent place! Very pleasent stay and quite clean place. Also got very quick services by Owner to my any complaints.",
      reviewedby: "Rachel",
      createdby: "20/07/2021",
    },
  ];
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h1" variant="h6" color="textPrimary" gutterBottom>
        Reviews
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "8px",
        }}
      >
        <Grid item xs={12} sm={7} className={classes.reviewgridStyle}>
          {reviews.map((review) => (
            <Grid item xs={12} className={classes.gridStyle}>
              <Box display="flex">
                <Avatar alt="Monali Doshi" src="/static/images/avatar/1.jpg" />
                <Typography
                  component="h1"
                  variant="body1"
                  color="secondary"
                  align="justify"
                  className={classes.usernameStyle}
                >
                  {review.reviewedby}
                </Typography>
              </Box>

              <Box display="flex">
                <Rating value={review.rating} readOnly />
              </Box>
              <Box display="flex">
                <Typography
                  component="h1"
                  variant="body1"
                  color="secondary"
                  align="justify"
                >
                  {review.discription}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  component="h1"
                  variant="caption"
                  color="secondary"
                  align="justify"
                >
                  Reviewed on {review.createdby}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            component="h1"
            variant="subtitle1"
            color="textPrimary"
            gutterBottom
          >
            Review Analysis
          </Typography>
          <div className={classes.graphboxStyle}>
            <Box p={1} display="flex">
              <Typography
                variant="subtitle1"
                color="secondary"
                align="justify"
                style={{ paddingRight: "10px" }}
              >
                5 stars
              </Typography>
              <ReviewBar value={15} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                15%
              </Typography>
            </Box>
            <Box p={1} display="flex">
              <Typography
                variant="subtitle1"
                color="secondary"
                align="justify"
                style={{ paddingRight: "10px" }}
              >
                4 stars
              </Typography>
              <ReviewBar value={40} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                40%
              </Typography>
            </Box>
            <Box p={1} display="flex">
              <Typography
                variant="subtitle1"
                color="secondary"
                align="justify"
                style={{ paddingRight: "10px" }}
              >
                3 stars
              </Typography>
              <ReviewBar value={25} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                25%
              </Typography>
            </Box>
            <Box p={1} display="flex">
              <Typography
                variant="subtitle1"
                color="secondary"
                align="justify"
                style={{ paddingRight: "10px" }}
              >
                2 stars
              </Typography>
              <ReviewBar value={15} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                15%
              </Typography>
            </Box>
            <Box p={1} display="flex">
              <Typography
                variant="subtitle1"
                color="secondary"
                align="justify"
                style={{ paddingRight: "20px" }}
              >
                1 star
              </Typography>
              <ReviewBar value={5} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                5%
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
