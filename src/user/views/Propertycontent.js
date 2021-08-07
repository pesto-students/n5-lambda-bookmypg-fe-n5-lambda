import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Rating from "../components/rating";
import Schedulevisit from "./Schedulevisit";
import Bookproperty from "./Bookproperty";
import Similarproperties from "../components/similarproperties";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import DescriptionIcon from "@material-ui/icons/Description";

import "react-image-lightbox/style.css";

import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";

import Link from "@material-ui/core/Link";
import Amenities from "../components/amenities";
import Reviews from "../components/displayreviews";
import { S3_BUCKET_URL } from "../../constant";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const reviews = [
  {
    rating: "4",
    description: "Awesome Property",
    user: "abcdef",
    createdon: "12/7/2021",
  },
  {
    rating: "4",
    description: "Awesome Property",
    user: "abcdef",
    createdon: "12/7/2021",
  },
  {
    rating: "4",
    description: "Awesome Property",
    user: "abcdef",
    createdon: "12/7/2021",
  },
];

const data = {
  propertyname: "Zolo House 1",
  description:
    "3 BHK Sharing Rooms for Men in Sion, Mumbai Fully Furnished, with Parking",
  address: "Antop Avenue, sion main road, sion (east), Mumbai - 400 022.",
  rent: "15,000",
  owner: "Mr. Agarwal",
  ratings: 4,
  numrating: 10,
  amenities: [
    {
      name: "Television",
      logo: "https://bookmypg-photos.s3.us-east-2.amazonaws.com/amenity-logos/television-24.png",
    },
    {
      name: "Refrigerator",
      logo: "https://bookmypg-photos.s3.us-east-2.amazonaws.com/amenity-logos/refrigerator-5.png",
    },
    {
      name: "Washing Machine",
      logo: "",
    },
  ],
};

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
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    maxWidth: "1400px",
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
  iconText: {
    margin: "0px",
  },
  dialogStyle: { maxWidth: "800px" },
  amenitiesBox: {
    paddingTop: "20px",
    paddingTop: "20px",
  },
}));

const cards = [1, 2, 3, 4];

export default function Album(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [imgdialog, openImagedialog] = React.useState(false);

  const handleShowDialog = () => {
    openImagedialog(!imgdialog);
  };

  const property = props.property;

  const MyCollection = property.photos.map((photo) => {
    return { label: photo, imgPath: `${S3_BUCKET_URL}/${photo}` };
  });

  const maxSteps = MyCollection.length;
  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        {property && (
          <Grid container spacing={4}>
            <Grid item xs={12} sm={5}>
              <div
                style={{
                  height: 355,
                  width: "700px",
                  maxWidth: "100%",
                  display: "block",
                  overflow: "hidden",
                }}
              >
                <img
                  src={MyCollection[activeStep].imgPath}
                  alt={MyCollection[activeStep].label}
                  style={{
                    height: 255,
                    width: "500px",
                    maxWidth: "100%",
                    display: "block",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={handleShowDialog}
                />
                {imgdialog && (
                  <Dialog
                    style={{
                      position: "fixed",
                      display: "block",
                    }}
                    open
                    onClick={handleShowDialog}
                    classes={{ paper: classes.dialogStyle }}
                  >
                    <img
                      src={MyCollection[activeStep].imgPath}
                      alt={MyCollection[activeStep].label}
                      onClick={handleShowDialog}
                      alt="no image"
                    />
                  </Dialog>
                )}
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
            </Grid>
            <Grid item xs={12} sm={7}>
              <div>
                <Typography
                  component="h1"
                  variant="h6"
                  color="primary"
                  paragraph
                >
                  {property.name}

                  <Typography
                    style={{ display: "contents" }}
                    variant="caption"
                    display="block"
                    gutterBottom
                    color="secondary"
                  >
                    &nbsp;&nbsp;by&nbsp;
                    {property.owner.firstName + " " + property.owner.lastName}
                  </Typography>
                </Typography>
              </div>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <DescriptionIcon />
                </Grid>
                <Grid item>
                  <Typography
                    component="h1"
                    variant="body1"
                    color="secondary"
                    align="justify"
                    display="block"
                    className={classes.iconText}
                  >
                    {property.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <HomeIcon />
                </Grid>
                <Grid item>
                  <Typography
                    component="h1"
                    variant="body1"
                    color="secondary"
                    align="justify"
                    display="block"
                    className={classes.iconText}
                  >
                    {property.address}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <PaymentIcon />
                </Grid>
                <Grid item>
                  <Typography
                    component="h1"
                    variant="body1"
                    color="secondary"
                    paragraph
                    align="justify"
                    className={classes.iconText}
                  >
                    ₹&nbsp;{property.rent}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                spacing={2}
                class={classes.amenitiesBox}
              >
                <Grid item></Grid>
                <Grid item>
                  <Typography
                    component="h1"
                    variant="body1"
                    color="secondary"
                    paragraph
                    align="justify"
                  >
                    Amenities
                  </Typography>
                </Grid>
                <Amenities amenities={property.amenities} />
              </Grid>

              <Grid container alignItems="center" spacing={2}>
                <Grid item xl={12} sm={6} md={3}>
                  <div>
                    <Box
                      borderColor="transparent"
                      textAlign="center"
                      display="flex"
                    >
                      <Link
                        key={"reviews"}
                        {...{
                          color: "blue",
                        }}
                        onClick={executeScroll}
                      >
                        <Rating
                          name="read-only"
                          value={data.ratings}
                          number={property.numreviews || 0}
                          readOnly
                        />
                      </Link>
                    </Box>
                  </div>
                </Grid>
                <Grid item xl={12} sm={6} md={3}>
                  <Bookproperty />
                </Grid>
                <Grid item xl={12} sm={6} md={3}>
                  <Schedulevisit />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          style={{
            marginTop: "35px",
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Similarproperties
            title={"Similar properties"}
            properties={props.properties}
          />
        </Grid>
        <div ref={myRef}></div>
        <Grid
          item
          xs={12}
          style={{
            marginTop: "35px",
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Reviews />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
