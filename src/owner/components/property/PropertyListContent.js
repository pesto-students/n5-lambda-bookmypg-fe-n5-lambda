import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "../responsivedrawer/responsivedrawer";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
//import Tablecomponent from "./PropertyTable";
import Pagination from "../pagination/pagination";
import Addproperty from "./AddProperty";
import PropertiesSelector from "../../../user/helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import useStyles from "./styles/PropertyListContent.styles.js";
import Tablecomponent from "components/table/Table";

const Tabledata = [
  {
    name: "abc",
    location: "Mumbai",
    address: "Sion",
    pincode: "12345",
    freebeds: "10",
    createdAt: "12/07/2021",
  },
  {
    name: "def",
    location: "Delhi",
    address: "123",
    pincode: "abc",
    freebeds: "abc",
    createdAt: "12/07/2021",
  },
  {
    name: "pqr",
    location: "Chennai",
    address: "123",
    pincode: "abc",
    freebeds: "abc",
    createdAt: "12/07/2021",
  },
];

export function PropertyListContent(props) {
  const classes = useStyles();
  useEffect(() => {
    props.resetProperties();
  }, []);

  useEffect(() => {
    props.getProperties();
  }, []);

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.containerStyle}>
            <Typography component="h1" variant="h5">
              Property List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchboxStyle}>
                <TextField
                  id="standard-basic"
                  label="Search by property name"
                  className={classes.textfieldStyle}
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.propertybuttonStyle}>
                <Addproperty />
              </Grid>
            </Grid>
            <Tablecomponent
              tableData={Tabledata}
              switchData="name"
              list_type="Properties"
            />
            {/* <Tablecomponent properties={props.properties} />*/}
          </Grid>
          <Pagination />
        </Grid>
      </ResponsiveDrawer>
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
    // updateProperty: (id) => dispatch(propertiesActions.updateProperty(id)),
    resetProperties: () => dispatch(propertiesActions.resetState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyListContent);
