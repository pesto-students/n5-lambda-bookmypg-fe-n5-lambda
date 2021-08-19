import React, { useRef } from "react";
import { get } from "lodash";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
import ButtonComponent from "components/button/Button";
import Typography from "components/typography/Typography";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function PropertyContent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const [bookProperty, showBookProperty] = React.useState(false);
  const handleBookProperty = () => {
    showBookProperty(!bookProperty);
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
            <Grid item xs={12} sm={4}>
              <div>
                <Typography
                  type="Caption"
                  text={property.propertydata.name}
                  captiontext={
                    " by " +
                    property.propertydata.owner.firstName +
                    " " +
                    property.propertydata.owner.lastName
                  }
                />
              </div>
              <Grid
                container
                alignItems="center"
                spacing={2}
                className={classes.wrapStyle}
              >
                <Grid item>
                  <DescriptionIcon />
                </Grid>
                <Grid item>
                  <Typography
                    type="Body"
                    text={property.propertydata.description}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                spacing={2}
                className={classes.wrapStyle}
              >
                <Grid item>
                  <HomeIcon />
                </Grid>
                <Grid item>
                  <Typography
                    type="Body"
                    text={property.propertydata.address}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <PaymentIcon />
                </Grid>
                <Grid item>
                  <Typography
                    type="Body"
                    text={"₹ " + property.propertydata.rent}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                spacing={2}
                className={classes.amenitiesBox}
              >
                <Grid item>
                  <Typography type="Body" text={"Amenities"} />
                </Grid>
                <Amenities amenities={property.propertydata.amenities} />
              </Grid>

              <Grid container alignItems="center" spacing={2}>
                <Grid item xl={12} sm={6} md={4}>
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
                          value={
                            get(property, "reviewdata.avgratings")
                              ? property.reviewdata.avgratings
                              : 0
                          }
                          number={
                            get(property, "reviewdata.reviews.length")
                              ? property.reviewdata.reviews.length
                              : 0
                          }
                          readOnly
                        />
                      </Link>
                    </Box>
                  </div>
                </Grid>
                {props.user && props.user._id ? (
                  <>
                    <Grid item xl={12} sm={6} md={4}>
                      <ButtonComponent
                        text="Book Property"
                        handleClick={handleBookProperty}
                      />
                    </Grid>
                    <Grid item xl={12} sm={6} md={4}>
                      <ScheduleVisit
                        owner={property.propertydata.owner.email}
                        property_name={property.propertydata.name}
                        property_id={property.propertydata._id}
                      />
                    </Grid>
                  </>
                ) : (
                  <Typography
                    type="BodyText"
                    text="**Please login to book property or schedule visit"
                  />
                )}
              </Grid>
            </Grid>
            {bookProperty && (
              <Grid item xs={12} sm={1}>
                <Bookproperty
                  property={property.propertydata}
                  user={props.user}
                  updateUser={props.updateUser}
                  handleBookProperty={handleBookProperty}
                />
              </Grid>
            )}
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
          <Reviews property={property} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
