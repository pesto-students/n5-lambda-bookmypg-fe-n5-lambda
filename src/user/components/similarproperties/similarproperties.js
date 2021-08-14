import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Cardrating from "../../components/rating/cardratings";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { S3_BUCKET_URL } from "../../../constant";
import useStyles from "../similarproperties/similarproperties.styles";
import Button from "../../../components/button/Button";

const data = {
  propertyname: "Zolo House 1",
  description:
    "3 BHK Sharing Rooms for Men in Sion, Mumbai Fully Furnished, with Parking",
  location: "Mumbai",
  Photo: "",
  rating: 4,
  numratings: 10,
};

export default function SimilarProperties(props) {
  const classes = useStyles();
  const history = useHistory();

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
        {/*<Grid className={classes.responsivegrid}>*/}
        <Grid>
          <Swiper slidesPerView={4}>
            <Grid container spacing={5}>
              {props.properties &&
                props.properties.length &&
                props.properties.map((property) => (
                  <Grid item key={property._id} xs={12} sm={6} md={3}>
                    <SwiperSlide style={{ height: "400px" }}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={`${S3_BUCKET_URL}/${property.photos[0]}`}
                          title={property.photos[0]}
                        />
                        <CardContent className={classes.cardContent}>
                          <div className={classes.propertynameStyle}>
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
                        <div className={classes.ratingboxStyle}>
                          <Cardrating
                            value={data.rating}
                            number={property.numreviews || 0}
                          />
                          <Button
                            text="More Details"
                            color="ContainedSecondary"
                            handelClick={() =>
                              history.push(`/property-details/${property._id}`)
                            }
                          />
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
                      <div className={classes.propertynameStyle}>
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
                    <div className={classes.ratingboxStyle}>
                      <Cardrating
                        value={data.rating}
                        number={property.numreviews || 0}
                      />

                      <Button
                        size="small"
                        variant="contained"
                        color="ContainedSecondary"
                        className={classes.buttonStyle}
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
