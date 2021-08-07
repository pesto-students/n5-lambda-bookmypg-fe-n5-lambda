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
import Tablecomponent from "./tenanttable";

import Pagination from "./pagination";
import TenantsSelector from "./TenantsSelector";
import tenantsActions from "../../redux-store/actions/tenantsActions";

export function Tenantcontent(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    props.resetTenants();
  }, []);

  useEffect(() => {
    props.getTenants();
  }, []);

  const tenants =
    props.tenants && props.tenants.length
      ? props.tenants.filter((tenant) => tenant.property)
      : [];

  console.log("props.tenants", props.tenants);

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
              Tenants List
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
                  padding: "8px",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="From Date:"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    disablePast={true}
                  />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="To Date:"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    disablePast={true}
                    style={{ marginLeft: "10px" }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Tablecomponent
              tenants={tenants}
              updateTenant={props.updateTenant}
            />
          </Grid>
          <Pagination />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const tenantsSelector = TenantsSelector(state.tenants);

  return {
    tenants: tenantsSelector.getTenantsData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTenants: () => dispatch(tenantsActions.getTenants()),
    updateTenant: (id) => dispatch(tenantsActions.updateTenant(id)),
    resetTenants: () => dispatch(tenantsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tenantcontent);
