import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import IconButton from "@material-ui/core/IconButton";
import Rating from "../components/rating";
import Cardrating from "../components/cardratings";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";
import { S3_BUCKET_URL } from "../../constant";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
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

  const [state, setState] = React.useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <React.Fragment>
        <Typography
          component="h1"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Grid className={classes.responsivegrid}>
          <Swiper slidesPerView={4}>
            <Grid container spacing={5}>
              {props.properties &&
                props.properties.length &&
                props.properties.map((property) => (
                  <Grid item key={property._id} xs={12} sm={6} md={3}>
                    <SwiperSlide>
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
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="h2"
                            >
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
                      <div></div>
                    </SwiperSlide>
                  </Grid>
                ))}
            </Grid>
          </Swiper>
        </Grid>
      </React.Fragment>
    );
  };

  const displayMobile = () => {
    return (
      <React.Fragment>
        <Typography
          component="h1"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Grid className={classes.responsivegrid}>
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
        </Grid>
      </React.Fragment>
    );
  };
  return <div>{mobileView ? displayMobile() : displayDesktop()}</div>;
}
