import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { get } from "lodash";
import Pagination from "../pagination/Pagination";
import Addamenity from "./AddAmenity";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";
import useStyles from "./styles/AmenityListContent.styles";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import TableComponent from "components/table/Table";
import AmenitiesSelector from "../../helpers/AmenitiesSelector";
import amenitiesActions from "../../../redux-store/actions/amenitiesActions";
import UserSelector from "../../../user/helpers/UserSelector";
import { ORDER_BY } from "../../../constant";

export function AmenityListContent(props) {
  const classes = useStyles();

  const [pagenumber, setPagenumber] = React.useState(0);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [order_by, setOrderBy] = React.useState(ORDER_BY.DSC);
  const [refresh, setRefresh] = React.useState(false);

  useEffect(() => {
    props.resetAmenities();
  }, []);

  useEffect(() => {
    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&columnname=createdAt&orderby=${order_by}`;
    const user = props.user;
    props.getAmenities({ extraParams, user });
  }, [pagenumber, countperpage, search, order_by, refresh]);

  let TableData = [];
  if (get(props, "amenities.length")) {
    props.amenities.map((amenity) => {
      TableData.push({
        _id: amenity._id,
        name: amenity.name,
        logo: amenity.logo,
        isactive: amenity.isactive,
        createdAt: amenity.createdAt,
      });
    });
  }
  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography type="ListTitle" text="Amenity List" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.textfieldStyle}>
                <TextField
                  type="standardForm"
                  label="Search by amenity name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  icon="Search"
                />
              </Grid>
              <Addamenity
                addAmenity={props.addAmenity}
                user={props.user}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            </Grid>
            <TableComponent
              switchData="name"
              sortingColumn="createdAt"
              tableData={TableData}
              list_type="Amenities"
              order_by={order_by}
              setOrderBy={setOrderBy}
              setRefresh={setRefresh}
              refresh={refresh}
              updateDocument={props.updateAmenity}
              user={props.user}
            />
            <Pagination
              pagenumber={pagenumber}
              setPagenumber={setPagenumber}
              countperpage={countperpage}
              setCountperpage={setCountperpage}
              count={props.total_amenities}
            />
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const userSelector = UserSelector(state.user);
  const amenitiesSelector = AmenitiesSelector(state.amenities);

  return {
    user: userSelector.getUserData().data,
    amenities: amenitiesSelector.getAmenitiesData().data,
    total_amenities: amenitiesSelector.getAmenitiesCount().count,
    addAmenityRequestState: amenitiesSelector.addAmenityRequestState(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAmenities: (payload) => dispatch(amenitiesActions.getAmenities(payload)),
    addAmenity: (payload) => dispatch(amenitiesActions.addAmenity(payload)),
    updateAmenity: (id) => dispatch(amenitiesActions.updateAmenity(id)),
    resetAmenities: () => dispatch(amenitiesActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AmenityListContent);
