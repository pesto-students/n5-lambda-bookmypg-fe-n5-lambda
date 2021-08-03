import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import IconButton from "@material-ui/core/IconButton";

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

export default function Album() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 4);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 4);
  };

  return (
    <React.Fragment>
      <Grid className={classes.responsivegrid}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.icons}
        >
          <NavigateBeforeIcon />
        </IconButton>
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
                  <Button
                    size="small"
                    color="primary"
                    style={{
                      textTransform: "none",
                    }}
                  >
                    More Details
                  </Button>
                </CardActions>
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
        >
          <NavigateNextIcon />
        </IconButton>
      </Grid>
    </React.Fragment>
  );
}
