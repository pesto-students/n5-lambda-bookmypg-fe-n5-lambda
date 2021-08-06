import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { useHistory } from "react-router-dom";
import PropertiesSelector from "./PropertiesSelector";
import propertiesActions from "../../redux-store/actions/propertiesActions";

const useStylesselect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
}));

const cards = [1, 2, 3, 4];

export function Album(props) {
  const classes = useStyles();

  const classesselect = useStylesselect();

  const [location, setLocation] = React.useState("");
  const history = useHistory();

  useEffect(() => {
    props.getProperties();
  }, []);

  const handleChange = (event) => {
    setLocation(event.target.value);
    history.push("/propertylist");
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Search property at your location
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <FormControl variant="outlined" className={classesselect.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={location}
              onChange={handleChange}
              label="Location"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Mumbai</MenuItem>
              <MenuItem value={20}>Chennai</MenuItem>
              <MenuItem value={30}>Delhi</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography component="h1" variant="h6" color="secondary" gutterBottom>
          Who are we?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              paragraph
              align="justify"
            >
              This platform is to facilitate both a property owner to share his
              property details and Paying Guest to find suitable property with
              one-click hassle-free payments.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageList cols={1}>
              <ImageListItem>
                <img src="images/Hostel Images/img.jpg" alt={"Not available"} />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Container>
      <Container
        className={classes.cardGrid}
        maxWidth="md"
        style={{ borderTop: `1px solid rgba(0, 0, 0, 0.12)` }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ImageList cols={1}>
              <ImageListItem>
                <img src="images/Hostel Images/1.jpg" alt={"Not available"} />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              gutterBottom
            >
              What are we aiming at?
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              paragraph
              align="justify"
            >
              Our aim and motto are simple and singular. To provide the guests
              with a PG that feels like home best fitting their needs and the
              homeowners a guest who fits right in. To attain this we work with
              homeowners and guests to give everyone involved the best possible
              experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        className={classes.cardGrid}
        maxWidth="md"
        style={{ borderTop: `1px solid rgba(0, 0, 0, 0.12)` }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          Popular properties
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={5}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="images/Hostel Images/test.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Zolo House 1
                  </Typography>
                  <Typography>Ratings: 4</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    More Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);

  return {
    properties: propertiesSelector.getPropertiesData(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => dispatch(propertiesActions.getProperties()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
