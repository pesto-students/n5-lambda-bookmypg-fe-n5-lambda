import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";
import { Grid, Typography, TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Tablecomponent from "./OwnerTable";
import Pagination from "../pagination/Pagination";
import Addowner from "./AddOwner";
import useStyles from "./styles/OwnerListContent.styles";
import UserSelector from "../../../user/helpers/UserSelector";
import TenantsSelector from "../../../owner/components/TenantsSelector";
import tenantsActions from "../../../redux-store/actions/tenantsActions";
import { DATE } from "../../../constant";

export function OwnerlistContent(props) {
  const classes = useStyles();
  const [enabled, setEnabled] = React.useState(false);

  const [from_date, setFromDate] = React.useState(DATE.FROM_DATE);
  const [to_date, setToDate] = React.useState(DATE.TO_DATE); 
  const [pagenumber, setPagenumber] = React.useState(1);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  
  useEffect(() => {
    props.resetTenants();
  }, []);

  useEffect(() => {
    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&from_date=${from_date}&to_date=${to_date}`;
    props.getTenants({ extraParams });
  }, [pagenumber, countperpage, search, enabled, setEnabled, from_date, to_date]);

  let owners;
  if (
    props.tenants &&
    props.tenants.length
  ) {
    owners =
      props.tenants && props.tenants.length
        ? props.tenants.filter(
            (tenant) => tenant.role === "owner"
          )
        : [];
  }

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography component="h1" variant="h5">
              Owner List
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
                  label="Search by Owner name"
                  className={classes.textfieldStyle}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.datepickerStyle}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="From Date:"
                    value={from_date}
                    onChange={(date) => setFromDate(date.toISOString())}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
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
                    value={to_date}
                    onChange={(date) => setToDate(date.toISOString())}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    style={{ marginLeft: "10px" }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Addowner />
            </Grid>
            <Tablecomponent
              owners={owners}
              updateOwner={props.updateTenant}
              setEnabled={setEnabled}
              search={search}
              setSearch={setSearch}
            />
          </Grid>
          <Pagination
            pagenumber={pagenumber}
            setPagenumber={setPagenumber}
            countperpage={countperpage}
            setCountperpage={setCountperpage}
            count={props.tenants.length}
          />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const userSelector = UserSelector(state.user);
  const tenantsSelector = TenantsSelector(state.tenants);

  return {
    user: userSelector.getUserData().data,
    tenants: tenantsSelector.getTenantsData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTenants: (payload) => dispatch(tenantsActions.getTenants(payload)),
    updateTenant: (id) => dispatch(tenantsActions.updateTenant(id)),
    resetTenants: () => dispatch(tenantsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerlistContent);
