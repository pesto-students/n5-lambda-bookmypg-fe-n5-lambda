import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModalImage from "react-modal-image";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import Cardrating from "../components/cardratings";
import Link from "@material-ui/core/Link";
import Amenities from "../components/amenities";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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
}));

const cards = [1, 2, 3, 4];

export default function Album() {
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
    console.log("cliked");
  };
  const maxSteps = MyCollection.length;
  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5}>
            <div
              style={{
                maxWidth: "500px",
                flexGrow: 1,
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
              <Typography component="h1" variant="h6" color="primary" paragraph>
                {data.propertyname}

                <Typography
                  style={{ display: "contents" }}
                  variant="caption"
                  display="block"
                  gutterBottom
                  color="secondary"
                >
                  &nbsp;&nbsp;by&nbsp;{data.owner}
                </Typography>
              </Typography>
            </div>
            <Typography
              component="h1"
              variant="body1"
              color="secondary"
              paragraph
              align="justify"
            >
              {data.description}
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
                  {data.address}
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
                  ₹&nbsp;{data.rent}
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Box textAlign="center" display="flex" flexDirection="column">
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
                        number={data.numrating}
                        readOnly
                      />
                    </Link>
                  </Box>
                </div>
              </Box>
              <Box textAlign="center" display="flex">
                <div style={{ paddingLeft: "5px" }}>
                  <Bookproperty />
                </div>
                <div style={{ paddingLeft: "5px" }}>
                  <Schedulevisit />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Similarproperties title={"Similar properties"} />
        <div ref={myRef}></div>
      </Container>
    </React.Fragment>
  );
}
