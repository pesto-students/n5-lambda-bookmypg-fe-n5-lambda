import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "../responsivedrawer/responsivedrawer";
import { Grid } from "@material-ui/core";
//import Tablecomponent from "./TenantTable";
import Tablecomponent from "components/table/Table";
import Pagination from "../pagination/pagination";
import TenantsSelector from "../TenantsSelector";
import tenantsActions from "../../../redux-store/actions/tenantsActions";
import useStyles from "./styles/TenantListContent.styles";
import Datepicker from "../../../components/datepicker/Datepicker";
import Typography from "../../../components/typography/Typography";
import TextField from "../../../components/textfield/Textfield";

export function Tenantcontent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [enabled, setEnabled] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    props.resetTenants();
  }, []);

  useEffect(() => {
    props.getTenants();
  }, [enabled, setEnabled]);

  const tenants =
    props.tenants && props.tenants.length
      ? props.tenants.filter(
          (tenant) => tenant.property && tenant.role === "user"
        )
      : [];

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.containerStyle}>
            <Typography text="Tenant List" type="ListTitle" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchboxStyle}>
                <TextField type="standardForm" label="Search by tenant name" />
              </Grid>
              <Grid item xs={12} md={6} className={classes.datepickerStyle}>
                <Datepicker
                  type="DisableFuture"
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
                <Datepicker
                  type="DisableFutureMargin"
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
              </Grid>
            </Grid>
            {/* <Tablecomponent
              tenants={tenants}
              updateTenant={props.updateTenant}
              setEnabled={setEnabled}
           />*/}
            <Tablecomponent
              switchData="name"
              sortingColumn="onboardingDate"
              tableData={tenants}
              list_type="Tenants"
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
