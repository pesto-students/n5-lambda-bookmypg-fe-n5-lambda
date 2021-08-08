import React from "react";
import ResponsiveDrawer from "../common/responsivedrawer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  gridStyle: {
    marginLeft: "0px",
  },
  textfieldStyle: {
    width: "100%",
  },
  buttonStyle: {
    display: "flex",
    paddingBottom: "10px",
    alignSelf: "center",
  },
  buttonSpacing: {
    paddingTop: "35px",
  },
}));

const useStylesLabel = makeStyles((theme) => ({
  root: {
    "&$disabled": {
      color: "#616161",
    },
  },
  disabled: {},
  notchedOutline: {},
}));

const data = {
  propertyname: "Zolo House 1",
  rent: "15000/month",
  ownername: "Mr. Agarwal",
  rating: 4,
  numratings: 10,
};

export default function Tablefile() {
  const classes = useStyles();
  const classesLabel = useStylesLabel();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <p>Profile photo</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Name"
                defaultValue="-"
                fullwidth
                className={classes.textfieldStyle}
              />
              <TextField
                disabled
                id="standard-disabled"
                label="Email"
                defaultValue="-"
                fullwidth
                className={classes.textfieldStyle}
                InputProps={{
                  classes: {
                    root: classesLabel.root,
                    disabled: classesLabel.disabled,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Contact no"
                defaultValue="-"
                fullwidth
                className={classes.textfieldStyle}
              />
            </Grid>
            <Grid item style={{ display: "flex" }}>
              <FormLabel
                component="legend"
                style={{
                  paddingTop: "14px",
                  paddingRight: "10px",
                  fontSize: "smaller",
                }}
              >
                Gender:
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <Grid item className={classes.buttonSpacing}>
              <Button variant="contained" color="secondary">
                Update
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}
