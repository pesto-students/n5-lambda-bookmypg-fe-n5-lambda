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
  const amenity = [
    {
      name: "Television",
      logo: "images/Hostel Images/television-24.png",
    },
    {
      name: "Refrigerator",
      logo: "images/Hostel Images/refrigerator-5.png",
    },
    {
      name: "Washing Machine",
      logo: "images/Hostel Images/washing-machine.png",
    },
    {
      name: "Wifi",
      logo: "images/Hostel Images/television-24.png",
    },
    {
      name: "Veg food",
      logo: "images/Hostel Images/refrigerator-5.png",
    },
    {
      name: "Study desk",
      logo: "images/Hostel Images/washing-machine.png",
    },
    {
      name: "Sofa",
      logo: "images/Hostel Images/television-24.png",
    },
    {
      name: "Microwave",
      logo: "images/Hostel Images/refrigerator-5.png",
    },
    {
      name: "Geyser",
      logo: "images/Hostel Images/washing-machine.png",
    },
  ];
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
        {amenity.map((a) => (
          <Grid item xs={4}>
            <Box display="flex" p={1} pt={0}>
              <img
                src={a.logo}
                style={{ width: "30px" }}
                alt="No image available"
              />

              <Typography
                component="h1"
                variant="body1"
                color="secondary"
                align="justify"
                style={{ paddingLeft: "5px" }}
              >
                {a.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
