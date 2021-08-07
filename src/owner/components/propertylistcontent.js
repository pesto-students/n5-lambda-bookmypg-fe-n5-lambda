import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import ResponsiveDrawer from "./responsivedrawer";
import Grid from "@material-ui/core/Grid/Grid";
import Link from "@material-ui/core/Link";
import TablePagination from "@material-ui/core/TablePagination";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Tablecomponent from "./propertytable";
import Pagination from "./pagination";
import Addproperty from "./addproperty";
import PropertiesSelector from "../../user/components/PropertiesSelector";
import propertiesActions from "../../redux-store/actions/propertiesActions";

export function PropertyListContent(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  useEffect(() => {
    props.resetProperties();
  }, []);

  useEffect(() => {
    props.getProperties();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid
            item
            xs={12}
            md={10}
            style={{ padding: "8px", textAlign: "center" }}
          >
            <Typography component="h1" variant="h5">
              Property List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  padding: "18px",
                  paddingLeft: "0px",
                  textAlign: "center",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Search by name"
                  style={{ width: "300px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  placeSelf: "flex-end",
                  textAlign: "right",
                  padding: "18px",
                  paddingRight: "0px",
                }}
              >
                <Addproperty />
              </Grid>
            </Grid>
            <Tablecomponent properties={props.properties} />
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
