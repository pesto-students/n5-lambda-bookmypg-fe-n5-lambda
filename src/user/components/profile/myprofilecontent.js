import React from "react";
import ResponsiveDrawer from "../common/responsivedrawer";
import {
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import useStyles from "./styles/MyProfileContent.styles";
import Button from "../../../components/button/Button";
import ProfilePhoto from "../profilephoto/ProfilePhoto";

const data = {
  propertyname: "Zolo House 1",
  rent: "15000/month",
  ownername: "Mr. Agarwal",
  rating: 4,
  numratings: 10,
};

export default function MyProfileContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <ProfilePhoto imageName="DefaultPic.png" />
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
                    root: classes.root,
                    disabled: classes.disabled,
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
            <Grid item className={classes.radiogroupStyle}>
              <FormLabel component="legend" className={classes.formlabelStyle}>
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
              <Button text="Update" />
            </Grid>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}
