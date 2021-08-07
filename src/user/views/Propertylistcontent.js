import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Rating from "../components/rating";
import PropertiesSelector from "../components/PropertiesSelector";
import propertiesActions from "../../redux-store/actions/propertiesActions";
import Pagination from "../components/pagination";
import { S3_BUCKET_URL } from "../../constant";

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
    paddingTop: "80px",
  },
  heroButtonsMobile: {
    paddingTop: "0px",
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    flexGrow: 1,
  },
  card: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "100%",
      padding: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      height: "100%",
      padding: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
      height: "100%",
      padding: "10px",
    },
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

  root: {
    display: "flex",
    padding: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  detailsMobile: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  content: {
    flex: "1 0 auto",
    paddingLeft: "24px",
  },
  cover: {
    width: 351,
    height: 210,
  },
  buttonAlign: {
    display: "flex",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export function PropertyListContent(props) {
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
                    <CardContent
                      className={classes.content}
                      style={{ padding: 0, paddingLeft: "20px" }}
                    >
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
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{ margin: "10px", textTransform: "none" }}
                            >
                              Schedule Visit
                            </Button>
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{ margin: "10px", textTransform: "none" }}
                              onClick={() =>
                                history.push(
                                  `/property-details/${property._id}`
                                )
                              }
                            >
                              More Details
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
            <Pagination />
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
                    <CardContent
                      className={classes.content}
                      style={{ padding: 0, paddingLeft: "20px" }}
                    >
                      <Grid>
                        <Typography component="h5" variant="h5">
                          {property.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          style={{ wordWrap: "break-word" }}
                        >
                          {property.description}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          ₹{property.rent}
                        </Typography>
                      </Grid>

                      <div className={classes.heroButtonsMobile}>
                        <Grid container spacing={2}>
                          <Box className={classes.buttonAlign}>
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{ margin: "10px", textTransform: "none" }}
                            >
                              Schedule Visit
                            </Button>
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{ margin: "10px", textTransform: "none" }}
                              onClick={() =>
                                history.push(
                                  `/property-details/${property._id}`
                                )
                              }
                            >
                              More Details
                            </Button>
                          </Box>
                        </Grid>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          paddingBottom: "10px",
                          paddingTop: "20px",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Rating
                          value={4}
                          number={10}
                          number={property.numreviews || 0}
                        />

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
        <Pagination />
      </React.Fragment>
    );
  };

  return (
    <>
      <div>{mobileView ? displayMobile() : displayDesktop()}</div>
    </>
  );
}
const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);

  return {
    properties: propertiesSelector.getPropertiesData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => dispatch(propertiesActions.getProperties()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyListContent);
