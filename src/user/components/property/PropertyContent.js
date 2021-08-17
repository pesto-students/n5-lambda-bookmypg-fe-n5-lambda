import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Rating from "../rating/rating";
import ScheduleVisit from "../schedulevisit/ScheduleVisit";
import Bookproperty from "../bookproperty/BookProperty";
import Similarproperties from "../similarproperties/similarproperties";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import DescriptionIcon from "@material-ui/icons/Description";
import "react-image-lightbox/style.css";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Amenities from "../amenity/amenities";
import Reviews from "../review/DisplayReviews";
import { S3_BUCKET_URL } from "../../../constant";
import useStyles from "./styles/PropertyContent.styles";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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

export default function PropertyContent(props) {
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

  const MyCollection = property.propertydata.photos.map((photo) => {
    return { label: photo, imgPath: `${S3_BUCKET_URL}/${photo}` };
  });

  const maxSteps = MyCollection.length;
  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        {property && (
          <Grid container spacing={4}>
            <Grid item xs={12} sm={5}>
              <div className={classes.imgboxStyle}>
                <img
                  src={MyCollection[activeStep].imgPath}
                  alt={MyCollection[activeStep].label}
                  className={classes.imgStyle}
                  onClick={handleShowDialog}
                />
                {imgdialog && (
                  <Dialog
                    className={classes.dialogboxStyle}
                    open
                    onClick={handleShowDialog}
                    classes={{ paper: classes.dialogStyle }}
                  >
                    <img
                      src={MyCollection[activeStep].imgPath}
                      alt={MyCollection[activeStep].label}
                      onClick={handleShowDialog}
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
                  {property.propertydata.name}

                  <Typography
                    style={{ display: "contents" }}
                    variant="caption"
                    display="block"
                    gutterBottom
                    color="secondary"
                  >
                    &nbsp;&nbsp;by&nbsp;
                    {property.propertydata.owner.firstName +
                      " " +
                      property.propertydata.owner.lastName}
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
                    {property.propertydata.description}
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
                    {property.propertydata.address}
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
                    ₹&nbsp;{property.propertydata.rent}
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
                <Amenities amenities={property.propertydata.amenities} />
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
                          number={property.propertydata.numreviews || 0}
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
                  <ScheduleVisit
                    owner={property.propertydata.owner.email}
                    property_name={property.propertydata.name}
                    property_id={property.propertydata._id}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          xl={12}
          className={classes.SimilarpropertiesStyle}
          maxWidth="md"
          style={{ borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Similarproperties
            title={"Recently Added Properties"}
            latestProperties={props.latestProperties}
          />
        </Grid>
        <div ref={myRef}></div>
        <Grid item xs={12} className={classes.reviewStyle}>
          <Reviews />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
