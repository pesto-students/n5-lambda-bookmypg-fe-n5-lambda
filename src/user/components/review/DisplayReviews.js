import React from "react";
import { Grid, Box, Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles/DisplayReview.styles";
import Typography from "components/typography/Typography";
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
      <Typography type="FormTitle" text="Reviews" />
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
              <Box className={classes.nameboxStyle}>
                <Avatar alt="Monali Doshi" src="/static/images/avatar/1.jpg" />
                <Typography type="Bodywithpadding" text={review.reviewedby} />
              </Box>

              <Box display="flex">
                <Rating value={review.rating} readOnly />
              </Box>

              <Box>
                <Typography
                  type="CaptionText"
                  text={review.discription}
                  captiontext={"Reviewed on " + review.createdby}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <Typography type="FormTitle" text="Review Analysis" />

          <div className={classes.graphboxStyle}>
            <Box p={1} pl={3} display="flex">
              <Typography type="Bodywithpadding" text="5 stars" />
              <ReviewBar value={15} />
              <Typography type="BodyTextwithpadding" text="15%" />
            </Box>
            <Box p={1} pl={3} display="flex">
              <Typography type="Bodywithpadding" text="4 stars" />
              <ReviewBar value={40} />
              <Typography type="BodyTextwithpadding" text="40%" />
            </Box>
            <Box p={1} pl={3} display="flex">
              <Typography type="Bodywithpadding" text="3 stars" />
              <ReviewBar value={25} />
              <Typography type="BodyTextwithpadding" text="25%" />
            </Box>
            <Box p={1} pl={3} display="flex">
              <Typography type="Bodywithpadding" text="2 stars" />
              <ReviewBar value={15} />
              <Typography type="BodyTextwithpadding" text="15%" />
            </Box>
            <Box p={1} pl={3} display="flex">
              <Typography type="Bodywithpadding" text="1 stars" />
              <ReviewBar value={15} />
              <Typography type="BodyTextwithpadding" text="15%" />
            </Box>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
