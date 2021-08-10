import React from "react";
import ResponsiveDrawer from "../common/responsivedrawer";
import Typography from "@material-ui/core/Typography";
import Complaint from "../complaint/RaiseComplaint";
import ReviewProperty from "../review/ReviewProperty";
import { Grid, Card, CardContent, CardMedia, Box } from "@material-ui/core";
import useStyles from "./styles/MyPropertiesContent.styles";
import Button from "../../../components/button/Button";
import Rating from "../../../components/rating/rating";

const data = {
  property: "Zolo House 1",
  rent: "15000/month",
  owner: "Mr. Agarwal",
  review: {},
  numratings: 10,
};

export default function MyPropertiesContent() {
  const classes = useStyles();
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container className={classes.gridStyle}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="images/Hostel Images/test.jpg"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <div className={classes.propertydetailStyle}>
                  <Typography variant="h6" component="h2">
                    {data.property}
                  </Typography>
                  <Typography variant="body2" className={classes.ownerStyle}>
                    by {data.owner}
                  </Typography>
                </div>
                <div>
                  <Typography gutterBottom variant="subtitle2">
                    ₹&nbsp;{data.rent}
                  </Typography>
                </div>

                {data.review.rating ? (
                  <div className={classes.ratingboxStyle}>
                    <Box display="flex" p={1}>
                      <Rating
                        value={data.review.rating}
                        type="Large"
                        readonly={true}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      className={classes.descriptionStyle}
                    >
                      {data.review.description}
                    </Typography>
                  </div>
                ) : (
                  <div>
                    <Box display="flex" p={1}>
                      <Typography gutterBottom variant="subtitle2">
                        You haven't reviewed this property yet. To Review it
                        <ReviewProperty value={data.property} />
                      </Typography>
                    </Box>
                  </div>
                )}
              </CardContent>
              <div className={classes.buttonStyle}>
                <Complaint />
                <Button text="Pay Rent" type="Paybutton" />
              </div>
            </Card>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}
