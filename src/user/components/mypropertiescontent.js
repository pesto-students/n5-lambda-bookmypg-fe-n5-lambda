import React from "react";
import ResponsiveDrawer from "./responsivedrawer";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingTop: "100px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  iconbuttons: {
    display: "flex",
  },
  icons: {
    [theme.breakpoints.down("md")]: {
      transform: "rotate(90deg)",
    },
    [theme.breakpoints.up("md")]: {
      transform: "rotate(0deg)",
    },
    [theme.breakpoints.up("lg")]: {
      transform: "rotate(0deg)",
    },
  },
  responsivegrid: {
    display: "flex",
    marginTop: "15px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
}));

const cards = [1, 2, 3, 4];

const data = {
  propertyname: "Zolo House 1",
  rent: "15000/month",
  ownername: "Mr. Agarwal",
  rating: 4,
  numratings: 10,
};

export default function Tablefile() {
  const classes = useStyles();
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="images/Hostel Images/test.jpg"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <div style={{ display: "flex" }}>
                  <Typography variant="h6" component="h2">
                    {data.propertyname}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingTop: "10px", paddingLeft: "5px" }}
                  >
                    by {data.ownername}
                  </Typography>
                </div>
                <div>
                  <Typography gutterBottom variant="subtitle2">
                    ₹&nbsp;{data.rent}
                  </Typography>
                </div>

                <div>
                  <Box display="flex" p={1}>
                    <Rating value={5} size="large" />
                  </Box>
                  <TextField
                    id="outlined-textarea"
                    label="Write your review here"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                  />
                </div>
              </CardContent>
              <div
                style={{
                  display: "flex",
                  paddingBottom: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="contained" color="secondary">
                  Complaint
                </Button>
                <Button variant="contained" color="secondary">
                  Pay Rent
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}
