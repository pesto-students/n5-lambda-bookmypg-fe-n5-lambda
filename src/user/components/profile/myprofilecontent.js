import React from "react";
import { connect } from "react-redux";
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
import UserSelector from "../../helpers/UserSelector";
import userActions from "../../../redux-store/actions/userActions";

const data = {
  propertyname: "Zolo House 1",
  rent: "15000/month",
  ownername: "Mr. Agarwal",
  rating: 4,
  numratings: 10,
};

export function MyProfileContent(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} sm={12}>
            <ProfilePhoto imageName="DefaultPic.png" />
          </Grid>
          <Grid item xs={10} md={4} sm={10}>
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

const mapStateToProps = (state) => {
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (payload) => dispatch(userActions.getUser(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfileContent);