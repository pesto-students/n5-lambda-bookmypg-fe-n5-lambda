import React, { useEffect } from "react";
import ResponsiveDrawer from "../common/responsivedrawer";
import { Grid, Typography, TextField } from "@material-ui/core";
import Tablecomponent from "./PaymentTable";
import Pagination from "../../../components/tablepagination/tablepagination";
import useStyles from "./styles/PaymentListContent.styles";
import Datepicker from "../../../components/datepicker/Datepicker";

export function PaymentContent(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [enabled, setEnabled] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    //props.resetTenants();
  }, []);

  useEffect(() => {
    //  props.getTenants();
  }, [enabled, setEnabled]);

  const tenants =
    props.tenants && props.tenants.length
      ? props.tenants.filter((tenant) => tenant.property)
      : [];

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography component="h1" variant="h5">
              Payment History
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchfieldStyle}>
                <TextField
                  id="standard-basic"
                  label="Search by tenant name"
                  style={{ width: "300px" }}
                />
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
            <Tablecomponent
              tenants={tenants}
              updateTenant={props.updateTenant}
              setEnabled={setEnabled}
            />
          </Grid>
          <Pagination />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

/*const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Tenantcontent);*/

export default PaymentContent;
