import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";

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

export default function ProfileContent() {
  const classes = useStyles();

  const classesselect = useStylesselect();

  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
    setSelectedValue(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");

  return (
    <React.Fragment>
      <Container
        alignItems="center"
        maxWidth="sm"
        component="main"
        className={classes.heroContent}
      >
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Basic Details
        </Typography>
        <container spacing={6}>
          <Grid mt={10} item xs={16} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="user-name"
                label="Name"
                variant="standard"
                style={{ marginBottom: "2em" }}
              />
            </form>
          </Grid>
        </container>
        <container spacing={4}>
          <Grid item mt={10} xs={12} sm={6}>
            <form
              mt={10}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="user-email"
                label="Email Address"
                variant="standard"
                style={{ marginBottom: "2em" }}
              />
            </form>
          </Grid>
        </container>

        <container spacing={6}>
          <Grid mt={10} item xs={16} sm={6}>
            <Typography>Male</Typography>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </Grid>
        </container>

        <container spacing={6}>
          <Grid mt={10} item xs={16} sm={6}>
            <Typography>Female</Typography>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ "aria-label": "B" }}
            />
          </Grid>
        </container>

        <container spacing={6}>
          <Grid mt={10} item xs={16} sm={6}>
            <Typography>Other</Typography>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ "aria-label": "C" }}
            />
          </Grid>
        </container>

        <container spacing={6}>
          <Grid mt={10} item xs={16} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="user-name" label="Contact No" variant="standard" />
            </form>
          </Grid>
        </container>
        <Button
          id="profileUpdate"
          variant="contained"
          style={{ marginTop: "2em" }}
        >
          Update
        </Button>
      </Container>
    </React.Fragment>
  );
}
