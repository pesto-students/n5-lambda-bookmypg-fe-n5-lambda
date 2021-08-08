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
import Complaint from "../components/raisecomplaint";
import ReviewProperty from "./reviewproperty";

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
  gridStyle: {
    marginLeft: "0px",
  },
  textfieldStyle: {
    width: "100%",
  },
  buttonStyle: {
    display: "flex",
    paddingBottom: "10px",
    alignSelf: "center",
  },
  buttonSpacing: {
    marginLeft: "20px",
  },
}));

const data = {
  property: "Zolo House 1",
  rent: "15000/month",
  owner: "Mr. Agarwal",
  review: {},
  numratings: 10,
};

export default function Tablefile() {
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
                <div style={{ display: "flex" }}>
                  <Typography variant="h6" component="h2">
                    {data.property}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingTop: "10px", paddingLeft: "5px" }}
                  >
                    by {data.owner}
                  </Typography>
                </div>
                <div>
                  <Typography gutterBottom variant="subtitle2">
                    ₹&nbsp;{data.rent}
                  </Typography>
                </div>

                {data.review.rating ? (
                  <div
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.12)",
                      borderRadius: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <Box display="flex" p={1}>
                      <Rating
                        value={data.review.rating}
                        size="large"
                        readOnly
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ padding: "8px" }}
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
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.buttonSpacing}
                >
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
