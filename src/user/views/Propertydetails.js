import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Propertycontent from "./Propertycontent";
import Header from "../components/header";
import Footer from "../components/footer";
import Theme from "../theme/theme";
import PropertiesSelector from "../components/PropertiesSelector";
import propertiesActions from "../../redux-store/actions/propertiesActions";

const useStyles = makeStyles({
  section: {
    //padding: "70px 0",
  },
  title: {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  spacin: {
    marginRight: "50px",
    marginLeft: "25px",
    marginTop: "15px",
    marginBottom: "15px",
    padding: "20px 0px",
  },
  spacinlocation: {
    marginRight: "50px",
    marginLeft: "25px",
    marginTop: "15px",
    marginBottom: "15px",
  },
});

export function PropertyDetails(props) {
  const classes = useStyles();

  const property_id = props.match.params.id;

  const property = props.properties.filter(
    (property) => property._id === property_id
  )[0];

  return (
    <div className={classes.section}>
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
