import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Propertycontent from "../components/property/Propertycontent";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Theme from "../theme/theme";
import PropertiesSelector from "../helpers/PropertiesSelector";
import propertiesActions from "../../redux-store/actions/propertiesActions";

export function PropertyDetails(props) {
  const property_id = props.match.params.id;

  const property = props.properties.filter(
    (property) => property._id === property_id
  )[0];

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Grid container alignItems="center">
          <Header />
          <Propertycontent property={property} properties={props.properties} />
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails);
