import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";
import useStyles from "./styles/MyProfileContent.styles";
import Button from "components/button/Button";
import ProfilePhoto from "../profilephoto/ProfilePhoto";
import UserSelector from "../../helpers/UserSelector";
import userActions from "../../../redux-store/actions/userActions";
import TextField from "components/textfield/Textfield";

export function MyProfileContent(props) {
  const classes = useStyles();

  const user = props.user;

  const [firstName, setFirstName] = React.useState(user ? user.firstName : "");
  const [lastName, setLastName] = React.useState(user ? user.lastName : "");
  const [email, setEmail] = React.useState(user ? user.email : "");
  const [phone, setPhone] = React.useState(user ? user.phone : "");

  const handleSubmit = () => {
    let params = {
      firstName,
      lastName,
      phone,
    };
    props.updateUser({ id: user._id, params });
    toast("Profile has been updated successfully!");
  };

  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} sm={12}>
            <ProfilePhoto imageName="DefaultPic.png" />
          </Grid>
          <Grid item xs={10} md={4} sm={10}>
            <Grid item>
              <TextField
                type="standardForm"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                icon="Name"
              />
              <TextField
                type="standardForm"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                icon="Name"
              />

              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon="Email"
              />
            </Grid>
            <Grid item>
              <TextField
                type="standardForm"
                label="Contact No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                icon="Phone"
              />
            </Grid>
            <Grid item className={classes.buttonSpacing}>
              <Button text="Update" handleClick={handleSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
      <ToastContainer />
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
    updateUser: (payload) => dispatch(userActions.updateUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContent);
