import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";
import { Grid } from "@material-ui/core";
import { get } from "lodash";
import Tablecomponent from "components/table/Table";
import Pagination from "../pagination/pagination";
import TenantsSelector from "../TenantsSelector";
import tenantsActions from "../../../redux-store/actions/tenantsActions";
import useStyles from "./styles/TenantListContent.styles";
import Datepicker from "components/datepicker/Datepicker";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import UserSelector from "../../../user/helpers/UserSelector";
import { DATE, ORDER_BY } from "../../../constant";

export function Tenantcontent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [enabled, setEnabled] = React.useState(false);
  const [from_date, setFromDate] = React.useState(DATE.FROM_DATE);
  const [to_date, setToDate] = React.useState(DATE.TO_DATE);
  const [pagenumber, setPagenumber] = React.useState(0);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [order_by, setOrderBy] = React.useState(ORDER_BY.DSC);
  const [refresh, setRefresh] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    props.resetTenants();
  }, []);

  useEffect(() => {
    const extraParams = `${props.user._id}?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&from_date=${from_date}&to_date=${to_date}&columnname=onboardedAt&orderby=${order_by}`;
    props.getTenantsByOwner({ extraParams });
  }, [
    enabled,
    setEnabled,
    pagenumber,
    countperpage,
    search,
    from_date,
    to_date,
    order_by,
    refresh,
  ]);

  let TableData = [];
  if (get(props, "tenants.length")) {
    props.tenants.map((tenant) => {
      TableData.push({
        _id: tenant._id,
        name: tenant.firstName + " " + tenant.lastName,
        email: tenant.email,
        phone: tenant.phone,
        property: tenant.property ? tenant.property.name : "",
        isactive: tenant.isactive,
        onboardedAt: tenant.onboardedAt,
      });
    });
  }

  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography type="ListTitle" text="Tenant List" align="center" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.textfieldStyle}>
                <TextField
                  type="standardForm"
                  label="Search by tenant name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  icon="Search"
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.datepickerStyle}>
                <Datepicker
                  type="DisableFuture"
                  selectedDate={from_date}
                  handleDateChange={(date) => setFromDate(date.toISOString())}
                />
                <Datepicker
                  type="DisableFutureMargin"
                  selectedDate={to_date}
                  handleDateChange={(date) => setToDate(date.toISOString())}
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
              sortingColumn="onboardedAt"
              tableData={TableData}
              list_type="Tenants"
              order_by={order_by}
              setOrderBy={setOrderBy}
              setRefresh={setRefresh}
              refresh={refresh}
              updateDocument={props.updateTenant}
              user={props.user}
            />
            <Pagination
              pagenumber={pagenumber}
              setPagenumber={setPagenumber}
              countperpage={countperpage}
              setCountperpage={setCountperpage}
              count={props.total_tenants}
            />
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const tenantsSelector = TenantsSelector(state.tenants);
  const userSelector = UserSelector(state.user);

  return {
    tenants: tenantsSelector.getTenantsData().data,
    total_tenants: tenantsSelector.getTenantsCount().count,
    user: userSelector.getUserData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTenantsByOwner: (payload) =>
      dispatch(tenantsActions.getTenantsByOwner(payload)),
    updateTenant: (payload) => dispatch(tenantsActions.updateTenant(payload)),
    resetTenants: () => dispatch(tenantsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tenantcontent);
