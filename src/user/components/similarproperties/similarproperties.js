import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useStyles from "../similarproperties/similarproperties.styles";
import PropertyCard from "components/card/Card";

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
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const handleMoreDetails = (property) => {
    history.push(`/property-details/${property._id}`);
  };

  const latestProperties = props.latestProperties;

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
        <Grid>
          <Swiper
            slidesPerView={
              window.innerWidth > 600 && window.innerWidth < 900 ? 3 : 4
            }
          >
            <Grid container spacing={4}>
              {latestProperties &&
                latestProperties.length &&
                latestProperties.map((property) => (
                  <Grid
                    item
                    key={property.propertydata._id}
                    xs={12}
                    sm={6}
                    md={3}
                  >
                    <SwiperSlide style={{ height: "400px" }}>
                      <PropertyCard
                        property={property.propertydata}
                        reviewdata={property.reviewdata}
                      />
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
        <Swiper slidesPerView={1}>
          <Grid container spacing={4}>
            {latestProperties &&
              latestProperties.length &&
              latestProperties.map((property) => (
                <Grid
                  item
                  key={property.propertydata._id}
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <SwiperSlide style={{ height: "400px" }}>
                    <PropertyCard property={property.propertydata} />
                  </SwiperSlide>
                </Grid>
              ))}
          </Grid>
        </Swiper>
      </React.Fragment>
    );
  };
  return <div>{mobileView ? displayMobile() : displayDesktop()}</div>;
}
