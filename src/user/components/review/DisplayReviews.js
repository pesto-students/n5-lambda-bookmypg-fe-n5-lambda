import React from "react";
import { Grid, Box, Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles/DisplayReview.styles";
import Typography from "components/typography/Typography";
import ReviewBar from "components/progressbar/Progressbar";

export default function DisplayReviewContent(props) {
  const reviews = props.property.reviewdata.reviews || [];
  const reviewAnalysis = props.property.reviewdata.reviewanalysis || [];

  const ids = reviewAnalysis.map((review) => review._id);

  const getPercentage = (id) => {
    const percentage = reviewAnalysis.filter((review) => review._id === id)[0]
      .percentage;
    return percentage;
  };

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
          {reviews && reviews.length ? (
            reviews.map((review) => (
              <Grid item xs={12} className={classes.gridStyle}>
                <Box className={classes.nameboxStyle}>
                  <Avatar
                    alt="Monali Doshi"
                    src="/static/images/avatar/1.jpg"
                  />
                  <Typography
                    type="Bodywithpadding"
                    text={
                      review.reviewedby.firstName +
                      " " +
                      review.reviewedby.lastName
                    }
                  />
                </Box>

                <Box display="flex">
                  <Rating value={review.rating} readOnly />
                </Box>

                <Box>
                  <Typography
                    type="CaptionText"
                    text={review.description}
                    captiontext={"Reviewed on " + review.createdAt}
                  />
                </Box>
              </Grid>
            ))
          ) : (
            <Typography type="BodyText" text="**No reviews available" />
          )}
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        {reviews && reviews.length ? (
          <Grid item xs={12} sm={4}>
            <Typography type="FormTitle" text="Review Analysis" />

            <div className={classes.graphboxStyle}>
              <Box p={1} pl={3} display="flex">
                <Typography type="Bodywithpadding" text="5 stars" />
                <ReviewBar
                  value={
                    ids && ids.length && ids.includes(5) ? getPercentage(5) : 0
                  }
                />
                <Typography
                  type="BodyTextwithpadding"
                  text={
                    ids && ids.length && ids.includes(5)
                      ? getPercentage(5) + "%"
                      : "0%"
                  }
                />
              </Box>
              <Box p={1} pl={3} display="flex">
                <Typography type="Bodywithpadding" text="4 stars" />
                <ReviewBar
                  value={
                    ids && ids.length && ids.includes(4) ? getPercentage(4) : 0
                  }
                />
                <Typography
                  type="BodyTextwithpadding"
                  text={
                    ids && ids.length && ids.includes(4)
                      ? getPercentage(4) + "%"
                      : "0%"
                  }
                />
              </Box>
              <Box p={1} pl={3} display="flex">
                <Typography type="Bodywithpadding" text="3 stars" />
                <ReviewBar
                  value={
                    ids && ids.length && ids.includes(3) ? getPercentage(3) : 0
                  }
                />
                <Typography
                  type="BodyTextwithpadding"
                  text={
                    ids && ids.length && ids.includes(3)
                      ? getPercentage(3) + "%"
                      : "0%"
                  }
                />
              </Box>
              <Box p={1} pl={3} display="flex">
                <Typography type="Bodywithpadding" text="2 stars" />
                <ReviewBar
                  value={
                    ids && ids.length && ids.includes(2) ? getPercentage(2) : 0
                  }
                />

                <Typography
                  type="BodyTextwithpadding"
                  text={
                    ids && ids.length && ids.includes(2)
                      ? getPercentage(2) + "%"
                      : "0%"
                  }
                />
              </Box>
              <Box p={1} pl={3} display="flex">
                <Typography type="Bodywithpadding" text="1 stars" />
                <ReviewBar
                  value={
                    ids && ids.length && ids.includes(1) ? getPercentage(1) : 0
                  }
                />

                <Typography
                  type="BodyTextwithpadding"
                  text={
                    ids && ids.length && ids.includes(1)
                      ? getPercentage(1) + "%"
                      : "0%"
                  }
                />
              </Box>
            </div>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </React.Fragment>
  );
}
