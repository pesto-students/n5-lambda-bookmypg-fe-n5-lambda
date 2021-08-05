import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    boxShadow: "none",
  },
}));

export default function CenteredGrid(props) {
  const reviews = [
    {
      rating: "5",
      discription: "Awsome Property!",
      reviewedby: "Monali Doshi",
      createdby: "12/07/2021",
    },
    {
      rating: "4",
      discription: "Amazing Property!",
      reviewedby: "Mike",
      createdby: "18/07/2021",
    },
    {
      rating: "4",
      discription: "Pleasent place!",
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
        sm={6}
        md={3}
        style={{
          marginTop: "16px",
        }}
      >
        {reviews.map((review) => (
          <Grid item xs={12}>
            <Box display="flex">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography
                component="h1"
                variant="body1"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "10px", paddingTop: "10px" }}
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
    </React.Fragment>
  );
}
