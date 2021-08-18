import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { get } from "lodash";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";
import Tablecomponent from "components/table/Table";
import Pagination from "../pagination/pagination";
import ComplaintsSelector from "../ComplaintsSelector";
import complainsActions from "../../../redux-store/actions/complaintsActions";
import useStyles from "./styles/ComplaintListContent.styles";
import Datepicker from "components/datepicker/Datepicker";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import UserSelector from "../../../user/helpers/UserSelector";
import { DATE, ORDER_BY } from "../../../constant";

export function ComplaintsContent(props) {
  const [from_date, setFromDate] = React.useState(DATE.FROM_DATE);
  const [to_date, setToDate] = React.useState(DATE.TO_DATE);
  const [pagenumber, setPagenumber] = React.useState(1);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [order_by, setOrderBy] = React.useState(ORDER_BY.DSC);

  const classes = useStyles();
  useEffect(() => {
    props.resetComplaints();
  }, []);

  useEffect(() => {
    const user = props.user;
    const extraParams = `${user._id}?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&from_date=${from_date}&to_date=${to_date}&columnname=createdAt&orderby=${order_by}`;
    props.getComplaints({ extraParams, user });
  }, [pagenumber, countperpage, search, from_date, to_date, order_by]);

  let TableData = [];
  if (get(props, "complaints.length")) {
    props.complaints.map((complaint) => {
      TableData.push({
        name: complaint.raisedby.firstName + " " + complaint.raisedby.lastName,
        email: complaint.raisedby.email,
        phone: complaint.raisedby.phone,
        property: complaint.property.name,
        createdAt: complaint.createdAt,
        status: complaint.status,
      });
    });
  }

  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography type="ListTitle" text="Complaint List" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.textfieldStyle}>
                <TextField
                  type="standardForm"
                  label="Search by property name"
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
            <Tablecomponent
              tableData={TableData}
              switchData="name"
              sortingColumn="createdAt"
              list_type="Complaints"
              order_by={order_by}
              setOrderBy={setOrderBy}
            />
            <Pagination
              pagenumber={pagenumber}
              setPagenumber={setPagenumber}
              countperpage={countperpage}
              setCountperpage={setCountperpage}
              count={props.complaints.length}
            />
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const complaintsSelector = ComplaintsSelector(state.complaints);
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
    complaints: complaintsSelector.getComplaintsData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComplaints: (payload) =>
      dispatch(complainsActions.getComplaints(payload)),
    // updateComplaint: (id) => dispatch(complainsActions.updateComplaint(id)),
    resetComplaints: () => dispatch(complainsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsContent);
