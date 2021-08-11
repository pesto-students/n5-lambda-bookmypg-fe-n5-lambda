import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Rating from "../rating/rating";
import Pagination from "../pagination/pagination";
import { S3_BUCKET_URL } from "../../../constant";
import useStyles from "./styles/PropertyListContent.styles";
import ScheduleVisit from "../schedulevisit/ScheduleVisit";

export default function PropertyListContent(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  useEffect(() => {
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
        <Grid container spacing={2}>
          {props.properties &&
            props.properties.length &&
            props.properties.map((property) => (
              <Grid item xs={12} spacing={1}>
                <Card className={classes.root} style={{ height: "230px" }}>
                  <Box>
                    <CardMedia
                      className={classes.cover}
                      image={`${S3_BUCKET_URL}/${property.photos[0]}`}
                      title={property.photos[0]}
                    />
                  </Box>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {property.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {property.description}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        ₹{property.rent}
                      </Typography>

                      <div className={classes.heroButtons}>
                        <Grid container spacing={2}>
                          <Box>
                            <ScheduleVisit
                              owner={property.owner.email}
                              property_name={property.name}
                              property_id={property._id}
                            />
                            <Button
                              variant="contained"
                              color="secondary"
                              className={classes.buttonStyle}
                              onClick={() =>
                                history.push(
                                  `/property-details/${property._id}`
                                )
                              }
                              style={{ textTransform: "none" }}
                            >
                              MORE DETAILS
                            </Button>
                          </Box>
                        </Grid>
                      </div>
                    </CardContent>
                  </div>

                  <Rating
                    value={4}
                    number={property.numreviews || 0}
                    mobileView={true}
                  />
                </Card>
              </Grid>
            ))}
          <Grid item xs={12} spacing={1}>
            <Pagination
              getProperties={props.getProperties}
              pagenumber={props.pagenumber}
              setPagenumber={props.setPagenumber}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
  const history = useHistory();

  const displayMobile = () => {
    return (
      <React.Fragment>
        <Grid container spacing={5}>
          {props.properties &&
            props.properties.length &&
            props.properties.map((property) => (
              <Grid item>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="images/Hostel Images/test.jpg"
                    title="Image title"
                  />
                  <div className={classes.detailsMobile}>
                    <CardContent className={classes.content}>
                      <Grid>
                        <Typography component="h5" variant="h5">
                          {property.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          className={classes.descriptionStyle}
                        >
                          {property.description}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          ₹{property.rent}
                        </Typography>
                      </Grid>

                      <div className={classes.buttonsMobile}>
                        <Grid container spacing={2}>
                          <Box className={classes.buttonAlign}>
                            <ScheduleVisit
                              owner={property.owner.email}
                              property_name={property.name}
                            />
                            <Button
                              variant="contained"
                              color="secondary"
                              className={classes.buttonStyle}
                              style={{ textTransform: "none" }}
                              onClick={() =>
                                history.push(
                                  `/property-details/${property._id}`
                                )
                              }
                            >
                              MORE DETAILS
                            </Button>
                          </Box>
                        </Grid>
                      </div>
                      <div className={classes.ratingStyle}>
                        <Rating value={4} number={property.numreviews || 0} />

                        <Button
                          size="small"
                          variant="contained"
                          color="ContainedSecondary"
                          style={{ textTransform: "none" }}
                        >
                          More Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Pagination
          getProperties={props.getProperties}
          pagenumber={props.pagenumber}
          setPagenumber={props.setPagenumber}
        />
      </React.Fragment>
    );
  };

  return (
    <>
      <div>{mobileView ? displayMobile() : displayDesktop()}</div>
    </>
  );
}
