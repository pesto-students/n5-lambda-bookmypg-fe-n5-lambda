import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "../../../components/typography/Typography";
import TextField from "components/textfield/Textfield";
import Pagination from "../pagination/pagination";
import Addproperty from "./AddProperty";
import PropertiesSelector from "../../../user/helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import useStyles from "./styles/PropertyListContent.styles.js";
import Tablecomponent from "components/table/Table";
import UserSelector from "../../../user/helpers/UserSelector";
import AmenitiesSelector from "../../../admin/helpers/AmenitiesSelector";
import amenitiesActions from "../../../redux-store/actions/amenitiesActions";
import LocationsSelector from "../../../user/helpers/LocationsSelector";
import { ORDER_BY } from "../../../constant";

export function PropertyListContent(props) {
  const classes = useStyles();

  const [pagenumber, setPagenumber] = React.useState(1);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [order_by, setOrderBy] = React.useState(ORDER_BY.DSC);

  useEffect(() => {
    props.resetProperties();
    props.resetAmenities();
  }, []);

  useEffect(() => {
    const user = props.user;
    props.getAmenities({ user });
  }, []);

  useEffect(() => {
    const extraParams = `${props.user._id}?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&columnname=createdAt&orderby=${order_by}`;
    props.getPropertiesByOwner({ extraParams });
  }, [pagenumber, countperpage, search, order_by]);

  let TableData = [];
  if (get(props, "properties.length")) {
    props.properties.map((property) => {
      TableData.push({
        name: property.propertydata.name,
        location: property.propertydata.location.name,
        address: property.propertydata.address,
        freebeds: property.propertydata.totalbeds,
        createdAt: property.propertydata.createdAt,
      });
    });
  }

  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography type="ListTitle" text="Property List" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.textfieldStyle}>
                <TextField
                  type="standardForm"
                  label="Search by property name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  icon="Search"
                />
              </Grid>

              <Addproperty
                amenities={props.amenities}
                locations={props.locations}
                addAmenity={props.addAmenity}
                user={props.user}
                addProperty={props.addProperty}
              />
            </Grid>
            <Tablecomponent
              tableData={TableData}
              switchData="name"
              list_type="Properties"
              sortingColumn="createdAt"
              order_by={order_by}
              setOrderBy={setOrderBy}
            />
            <Pagination
              pagenumber={pagenumber}
              setPagenumber={setPagenumber}
              countperpage={countperpage}
              setCountperpage={setCountperpage}
              count={props.properties.length}
            />
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);
  const userSelector = UserSelector(state.user);
  const amenitiesSelector = AmenitiesSelector(state.amenities);
  const locationsSelector = LocationsSelector(state.locations);

  return {
    user: userSelector.getUserData().data,
    properties: propertiesSelector.getPropertiesData().data,
    amenities: amenitiesSelector.getAmenitiesData().data,
    locations: locationsSelector.getLocationsData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAmenities: (payload) => dispatch(amenitiesActions.getAmenities(payload)),
    getPropertiesByOwner: (payload) =>
      dispatch(propertiesActions.getPropertiesByOwner(payload)),
    addProperty: (payload) => dispatch(propertiesActions.addProperty(payload)),
    // updateProperty: (id) => dispatch(propertiesActions.updateProperty(id)),
    resetProperties: () => dispatch(propertiesActions.resetState()),
    resetAmenities: () => dispatch(amenitiesActions.resetState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyListContent);
