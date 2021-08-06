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
        <Grid
          item
          xs={12}
          sm={7}
          style={{
            padding: "10px",
          }}
        >
          {reviews.map((review) => (
            <Grid item xs={12} style={{ paddingBottom: "20px" }}>
              <Box display="flex">
                <Avatar alt="Monali Doshi" src="/static/images/avatar/1.jpg" />
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
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={2}>
          <Typography
            component="h1"
            variant="subtitle1"
            color="textPrimary"
            gutterBottom
          >
            Review Analysis
          </Typography>
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "10px",
            }}
          >
            <Box display="flex" p={1}>
              <Rating value={5} readOnly />
              <Typography
                component="h1"
                variant="subtitle1"
                color="secondary"
                align="justify"
              >
                71%
              </Typography>
            </Box>
            <Box display="flex" p={1}>
              <Rating value={4} readOnly />
              <Typography
                component="h1"
                variant="subtitle1"
                color="secondary"
                align="justify"
              >
                9%
              </Typography>
            </Box>
            <Box display="flex" p={1}>
              <Rating value={3} readOnly />
              <Typography
                component="h1"
                variant="subtitle1"
                color="secondary"
                align="justify"
              >
                10%
              </Typography>
            </Box>
            <Box display="flex" p={1}>
              <Rating value={2} readOnly />
              <Typography
                component="h1"
                variant="subtitle1"
                color="secondary"
                align="justify"
              >
                6%
              </Typography>
            </Box>
            <Box display="flex" p={1}>
              <Rating value={1} readOnly />
              <Typography
                component="h1"
                variant="subtitle1"
                color="secondary"
                align="justify"
              >
                4%
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
