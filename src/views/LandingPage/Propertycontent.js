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
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ChevronRight from "@material-ui/icons/ChevronRight";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Rating from "../LandingPage/rating";

const MyCollection = [
  {
    label: "First Picture",
    imgPath: "images/Hostel Images/test.jpg",
  },
  {
    label: "Second Picture",
    imgPath: "images/Hostel Images/test2.jpg",
  },
  {
    label: "Third Picture",
    imgPath: "images/Hostel Images/test3.jpg",
  },
  {
    label: "Fourth Picture",
    imgPath: "images/Hostel Images/test5.jpg",
  },
  {
    label: "Fifth Picture",
    imgPath: "images/Hostel Images/test6.jpg",
  },
];

const useStylesselect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
}));

const cards = [1, 2, 3, 4];

export default function Album() {
  const classes = useStyles();

  const classesselect = useStylesselect();

  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const maxSteps = MyCollection.length;
  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                maxWidth: 400,
                flexGrow: 1,
              }}
            >
              <img
                src={MyCollection[activeStep].imgPath}
                alt={MyCollection[activeStep].label}
                style={{
                  height: 255,
                  width: "100%",
                  maxWidth: 400,
                  display: "block",
                  overflow: "hidden",
                }}
              />
              <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </div>
            <Rating value={4} number={10} />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Schedule Visit
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Book Property
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography component="h1" variant="h6" color="primary" paragraph>
              Zolo House 1
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              color="secondary"
              paragraph
              align="justify"
            >
              Description: 3 BHK Sharing Rooms for Men in Sion, Mumbai Fully
              Furnished, with Parking
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              color="secondary"
              paragraph
              align="justify"
            >
              Amenities
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              color="secondary"
              paragraph
              align="justify"
            >
              Address: Antop Avenue, sion main road, sion (east), Mumbai - 400
              022.
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              color="secondary"
              paragraph
              align="justify"
            >
              Rent: ₹15,000/ month
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              color="secondary"
              paragraph
              align="justify"
            >
              Owner name: Mr. Agarwal
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        className={classes.cardGrid}
        maxWidth="md"
        style={{ borderTop: `1px solid rgba(0, 0, 0, 0.12)` }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          Similar results
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={5}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="images/Hostel Images/test.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Zolo House 1
                  </Typography>
                  <Typography>Ratings: 4</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    More Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
