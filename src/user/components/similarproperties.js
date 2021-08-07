import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import IconButton from "@material-ui/core/IconButton";
import Cardrating from "../components/cardratings";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";
import { S3_BUCKET_URL } from "../../constant";
import useStyles from "./similarproperties.styles";

const data = {
  propertyname: "Zolo House 1",
  description:
    "3 BHK Sharing Rooms for Men in Sion, Mumbai Fully Furnished, with Parking",
  location: "Mumbai",
  Photo: "",
  rating: 4,
  numratings: 10,
};

export default function Album(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const history = useHistory();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 4);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 4);
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h6" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Grid className={classes.responsivegrid}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.icons}
          style={{ backgroundColor: "transparent", padding: "0px" }}
          disableRipple
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Grid container spacing={5}>
          {props.properties &&
            props.properties.length &&
            props.properties.map((property) => (
              <Grid item key={property._id} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${S3_BUCKET_URL}/${property.photos[0]}`}
                    title={property.photos[0]}
                  />
                  <CardContent className={classes.cardContent}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="h2">
                        {property.name}
                      </Typography>
                      <Typography gutterBottom variant="caption">
                        <LocationOnIcon />
                        {property.location.name}
                      </Typography>
                    </div>
                    <Typography gutterBottom variant="body2">
                      {property.description}
                    </Typography>
                  </CardContent>
                  <div
                    style={{
                      display: "flex",
                      paddingBottom: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Cardrating
                      value={data.rating}
                      number={property.numreviews || 0}
                    />

                    <Button
                      size="small"
                      variant="contained"
                      color="ContainedSecondary"
                      style={{ textTransform: "none" }}
                      onClick={() =>
                        history.push(`/property-details/${property._id}`)
                      }
                    >
                      More Details
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
        </Grid>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          component="span"
          disabled={activeStep === 16}
          onClick={handleNext}
          className={classes.icons}
          style={{ backgroundColor: "transparent" }}
          disableRipple
        >
          <NavigateNextIcon />
        </IconButton>
      </Grid>
    </React.Fragment>
  );
}
