import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "../responsivedrawer/responsivedrawer";
import { Grid, Typography, TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Tablecomponent from "./TenantTable";
import Pagination from "../pagination/pagination";
import TenantsSelector from "../TenantsSelector";
import tenantsActions from "../../../redux-store/actions/tenantsActions";
import useStyles from "./styles/TenantListContent.styles";
import UserSelector from "../../../user/helpers/UserSelector";
import PropertiesSelector from "../../../user/helpers/PropertiesSelector";
import { DATE } from "../../../constant";

export function Tenantcontent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

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
  }, [
    enabled,
    setEnabled,
    pagenumber,
    countperpage,
    search,
    from_date,
    to_date,
  ]);

  let properties;
  let tenants;
  if (
    props.properties &&
    props.properties.length &&
    props.tenants &&
    props.tenants.length
  ) {
    properties = props.properties.filter(
      (property) => property.owner._id === props.user._id
    );
    properties = properties.map((property) => property._id);
    tenants =
      props.tenants && props.tenants.length
        ? props.tenants.filter(
            (tenant) => tenant.property && tenant.role === "user"
          )
        : [];

    tenants = tenants.filter(tenant=> properties.includes(tenant.property._id));
  }

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.containerStyle}>
            <Typography component="h1" variant="h5">
              Tenant List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchboxStyle}>
                <TextField
                  id="standard-basic"
                  label="Search by tenant name"
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
            </Grid>
            <Tablecomponent
              tenants={tenants}
              updateTenant={props.updateTenant}
              setEnabled={setEnabled}
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
  const tenantsSelector = TenantsSelector(state.tenants);
  const userSelector = UserSelector(state.user);
  const propertiesSelector = PropertiesSelector(state.properties);

  return {
    tenants: tenantsSelector.getTenantsData().data,
    user: userSelector.getUserData().data,
    properties: propertiesSelector.getPropertiesData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTenants: (payload) => dispatch(tenantsActions.getTenants(payload)),
    updateTenant: (id) => dispatch(tenantsActions.updateTenant(id)),
    resetTenants: () => dispatch(tenantsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tenantcontent);
