import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "../components/rating";

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
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    flexGrow: 1,
  },
  card: {
    height: "500px",
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

  root: {
    display: "flex",
    padding: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    height: 150,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const cards = [1, 2, 3, 4];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item xs={12} spacing={1}>
            <Card className={classes.root}>
              <Box>
                <CardMedia
                  className={classes.cover}
                  image="images/Hostel Images/test.jpg"
                  title="Image title"
                />

                <Rating value={4} number={10} />
              </Box>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Zolo House 1
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    1 Private room in Studio for rent in Sion, Mumbai
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    ₹15,000/month
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ margin: "10px" }}
                    >
                      Schedule Visit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ margin: "10px" }}
                    >
                      More Details
                    </Button>
                  </Box>
                </Grid>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
