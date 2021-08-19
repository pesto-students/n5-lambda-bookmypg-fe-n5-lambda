import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";
import { Grid, Typography, TextField } from "@material-ui/core";
import Tablecomponent from "components/table/Table";
import Pagination from "components/tablepagination/tablepagination";
import useStyles from "./styles/PaymentListContent.styles";
import Datepicker from "components/datepicker/Datepicker";
import PaymentsSelector from "../../helpers/PaymentsSelector";
import paymentsActions from "../../../redux-store/actions/paymentsActions";
import UserSelector from "../../../user/helpers/UserSelector";
import { DATE, ORDER_BY } from "constant";

export function PaymentContent(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [enabled, setEnabled] = React.useState(false);
  const [from_date, setFromDate] = React.useState(DATE.FROM_DATE);
  const [to_date, setToDate] = React.useState(DATE.TO_DATE);
  const [pagenumber, setPagenumber] = React.useState(0);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [order_by, setOrderBy] = React.useState(ORDER_BY.DSC);

  useEffect(() => {
    props.resetPayments();
  }, []);

  useEffect(() => {
    const user = props.user;
    const extraParams = `${user._id}?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&from_date=${from_date}&to_date=${to_date}&columnname=createdAt&orderby=${order_by}`;
    props.getPayments({ extraParams, user });
  }, [pagenumber, countperpage, search, from_date, to_date, order_by]);

  let TableData = [];
  if (get(props, "payments.length")) {
    props.payments.map((payment) => {
      TableData.push({
        name: payment.raisedby.firstName + " " + payment.raisedby.lastName,
        property: payment.property.name,
        amount: payment.amount,
        charge_id: payment.charge_id,
        createdAt: payment.createdAt,
      });
    });
  }
  console.log("props.total_payments", props.total_payments);

  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography component="h1" variant="h5">
              Payment History
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchfieldStyle}>
                <TextField
                  id="standard-basic"
                  label="Search by property name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: "300px" }}
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
            <Tablecomponent
              tableData={TableData}
              switchData="name"
              sortingColumn="createdAt"
              list_type="Payments"
              order_by={order_by}
              setOrderBy={setOrderBy}
            />
            <Pagination
              pagenumber={pagenumber}
              setPagenumber={setPagenumber}
              countperpage={countperpage}
              setCountperpage={setCountperpage}
              count={props.total_payments}
            />
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const paymentsSelector = PaymentsSelector(state.payments);
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
    payments: paymentsSelector.getPaymentsData().data,
    total_payments: paymentsSelector.getPaymentsCount().count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPayments: (payload) => dispatch(paymentsActions.getPayments(payload)),
    resetPayments: () => dispatch(paymentsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContent);
