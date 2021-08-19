import React, { useEffect } from "react";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";
import { Grid } from "@material-ui/core";
import Pagination from "components/tablepagination/tablepagination";
import useStyles from "./styles/PaymentListContent.styles";
import Datepicker from "components/datepicker/Datepicker";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import TableComponent from "components/table/Table";

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
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography type="ListTitle" text="Payment History" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.textfieldStyle}>
                <TextField
                  type="standardForm"
                  label="Search by property name"
                  //value={search}
                  //onChange={(e) => setSearch(e.target.value)}
                  icon="Search"
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
            <TableComponent
              sortingColumn="createdAt"
              //tableData={TableData}
              list_type="Payments"
              //order_by={order_by}
              //setOrderBy={setOrderBy}
            />
            <Pagination />
          </Grid>
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
