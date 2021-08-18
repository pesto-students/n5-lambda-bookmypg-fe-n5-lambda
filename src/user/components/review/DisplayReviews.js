import React from "react";
import { Grid, Box, Typography, Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles/DisplayReview.styles";
import ReviewBar from "components/progressbar/Progressbar";

export default function DisplayReviewContent(props) {

  const reviews = props.property.reviewdata.reviews || [];
  const reviewAnalysis = props.property.reviewdata.reviewanalysis || [];

  const ids = reviewAnalysis.map(review=>review._id);

  const getPercentage = (id) => {
    const percentage = reviewAnalysis.filter(review=>review._id===id)[0].percentage;
    return percentage;
  } 

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
          {reviews &&
            reviews.length &&
            reviews.map((review) => (
              <Grid item xs={12} className={classes.gridStyle}>
                <Box display="flex">
                  <Avatar
                    alt="Monali Doshi"
                    src="/static/images/avatar/1.jpg"
                  />
                  <Typography
                    component="h1"
                    variant="body1"
                    color="secondary"
                    align="justify"
                    className={classes.usernameStyle}
                  >
                    {review.reviewedby.firstName +" " +review.reviewedby.lastName}
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
                    {review.description}
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    component="h1"
                    variant="caption"
                    color="secondary"
                    align="justify"
                  >
                    Reviewed on {review.createdAt}
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
              <ReviewBar value={ids && ids.length && ids.includes(5) ? getPercentage(5) : 0} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                {ids && ids.length && ids.includes(5) ? getPercentage(5)+"%" : "0%"}
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
              <ReviewBar value={ids && ids.length && ids.includes(4) ? getPercentage(4) : 0} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                {ids && ids.length && ids.includes(4) ? getPercentage(4)+"%" : "0%"}
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
              <ReviewBar value={ids && ids.length && ids.includes(3) ? getPercentage(3) : 0} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                {ids && ids.length && ids.includes(3) ? getPercentage(3)+"%" : "0%"}
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
              <ReviewBar value={ids && ids.length && ids.includes(2) ? getPercentage(2) : 0} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                {ids && ids.length && ids.includes(2) ? getPercentage(2)+"%" : "0%"}
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
              <ReviewBar value={ids && ids.length && ids.includes(1) ? getPercentage(1) : 0} />
              <Typography
                variant="subtitle2"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                {ids && ids.length && ids.includes(1) ? getPercentage(1)+"%" : "0%"}
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
