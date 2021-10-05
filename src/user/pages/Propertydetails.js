import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Propertycontent from "../components/property/PropertyContent";
import Header from "../components/header/header";
import Footer from "components/footer/footer";
import Theme from "theme/theme";
import PropertiesSelector from "../helpers/PropertiesSelector";
import propertiesActions from "../../redux-store/actions/propertiesActions";
import UserSelector from "../helpers/UserSelector";
import userActions from "../../redux-store/actions/userActions";

export function PropertyDetails(props) {
  const property_id = props.match.params.id;

  const property = props.properties.filter(
    (property) => property.propertydata._id === property_id
  )[0];

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Grid container alignItems="center">
          <Header />
          <Propertycontent
            property={property}
            properties={props.properties}
            latestProperties={props.latestProperties}
            user={props.user}
            updateUser={props.updateUser}
          />
          <Footer type="center" />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);
  const userSelector = UserSelector(state.user);

  return {
    properties: propertiesSelector.getPropertiesData().data,
    latestProperties: propertiesSelector.getLatestPropertiesData().data,
    user: userSelector.getUserData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => dispatch(propertiesActions.getProperties()),
    updateUser: (payload) => dispatch(userActions.updateUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PropertyDetails));
