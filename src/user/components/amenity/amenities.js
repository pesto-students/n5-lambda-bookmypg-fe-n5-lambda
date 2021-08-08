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

import { S3_BUCKET_URL } from "../../../constant";

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
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        style={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
          paddingTop: "10px",
        }}
      >
        {props.amenities &&
          props.amenities.length &&
          props.amenities.map((amenity) => (
            <Grid item xs={6}>
              <Box display="flex" p={2} pt={0}>
                <img
                  src={`${S3_BUCKET_URL}/${amenity.logo}`}
                  style={{ width: "30px" }}
                  alt="No image available"
                />

                <Typography
                  component="h1"
                  variant="body1"
                  color="secondary"
                  align="justify"
                >
                  {amenity.name}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
}
