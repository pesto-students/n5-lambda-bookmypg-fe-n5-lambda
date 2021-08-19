import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";
import { Grid } from "@material-ui/core";
import Pagination from "../pagination/Pagination";
import Addowner from "./AddOwner";
import useStyles from "./styles/OwnerListContent.styles";
import Datepicker from "components/datepicker/Datepicker";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import TableComponent from "components/table/Table";
import UserSelector from "user/helpers/UserSelector";
import TenantsSelector from "owner/components/TenantsSelector";
import tenantsActions from "../../../redux-store/actions/tenantsActions";
import { DATE, ORDER_BY } from "../../../constant";

export function OwnerlistContent(props) {
  const classes = useStyles();
  const [enabled, setEnabled] = React.useState(false);

  const [from_date, setFromDate] = React.useState(DATE.FROM_DATE);
  const [to_date, setToDate] = React.useState(DATE.TO_DATE);
  const [pagenumber, setPagenumber] = React.useState(0);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [order_by, setOrderBy] = React.useState(ORDER_BY.DSC);
  const [owner, setOwner] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);

  useEffect(() => {
    props.resetTenants();
  }, []);

  useEffect(() => {
    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&from_date=${from_date}&to_date=${to_date}&columnname=onboardedAt&orderby=${order_by}`;
    props.getTenants({ extraParams });
  }, [
    pagenumber,
    countperpage,
    search,
    enabled,
    setEnabled,
    from_date,
    to_date,
    order_by,
    owner,
    refresh,
  ]);

  let owners;
  let TableData = [];
  if (get(props, "tenants.length")) {
    owners =
      props.tenants && props.tenants.length
        ? props.tenants.filter((tenant) => tenant.role === "owner")
        : [];
    owners.map((owner) => {
      TableData.push({
        _id: owner._id,
        name: owner.firstName + " " + owner.lastName,
        email: owner.email,
        phone: owner.phone,
        isactive: owner.isactive,
        createdAt: owner.createdAt,
      });
    });
  }

  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography type="ListTitle" text="Owner List" align="center" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.textfieldStyle}>
                <TextField
                  type="standardForm"
                  label="Search by owner name"
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
                  label="From Date:"
                />
                <Datepicker
                  type="DisableFutureMargin"
                  selectedDate={to_date}
                  handleDateChange={(date) => setToDate(date.toISOString())}
                  label="To Date:"
                />
              </Grid>
              <Addowner
                addOwner={props.addOwner}
                setOwner={setOwner}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            </Grid>
            <TableComponent
              switchData="name"
              sortingColumn="createdAt"
              tableData={TableData}
              list_type="Owners"
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
              count={TableData && TableData.length ? TableData.length : 10}
            />
          </Grid>
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
    updateTenant: (payload) => dispatch(tenantsActions.updateTenant(payload)),
    addOwner: (payload) => dispatch(tenantsActions.addTenant(payload)),
    resetTenants: () => dispatch(tenantsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerlistContent);
