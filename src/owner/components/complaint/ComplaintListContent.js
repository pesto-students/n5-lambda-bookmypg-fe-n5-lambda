import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "../responsivedrawer/responsivedrawer";
import { Grid, TextField, Typography } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Tablecomponent from "./ComplaintTable";
import Pagination from "../pagination/pagination";
import ComplaintsSelector from "../ComplaintsSelector";
import complainsActions from "../../../redux-store/actions/complaintsActions";
import PropertiesSelector from "../../../user/helpers/PropertiesSelector";
import UserSelector from "../../../user/helpers/UserSelector";
import useStyles from "./styles/ComplaintListContent";
import { DATE, ORDER_BY } from "../../../constant";

export function ComplaintsContent(props) {
  const classes = useStyles();

  const [from_date, setFromDate] = React.useState(DATE.FROM_DATE);
  const [to_date, setToDate] = React.useState(DATE.TO_DATE); 
  const [pagenumber, setPagenumber] = React.useState(1);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [order_by, setOrderBy] = React.useState(ORDER_BY.DSC); 

  useEffect(() => {
    props.resetComplaints();
  }, []);

  useEffect(() => {
    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}&from_date=${from_date}&to_date=${to_date}&columnname=createdAt&orderby=${order_by}`;
    const user = props.user;
    props.getComplaints({ extraParams, user });
  }, [pagenumber, countperpage, search, from_date, to_date, order_by]);

  let properties;
  let complaints;
  if (
    props.properties &&
    props.properties.length &&
    props.complaints &&
    props.complaints.length
  ) {
    properties = props.properties.filter(
      (property) => property.owner._id === props.user._id
    );
    properties = properties.map((property) => property._id);

    complaints = props.complaints.filter((complaint) =>
      properties.includes(complaint.property._id)
    );
  }

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.containerStyle}>
            <Typography component="h1" variant="h5">
              Complaint List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchboxStyle}>
                <TextField
                  id="standard-basic"
                  label="Search by property name"
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
              complaints={complaints}
              order_by={order_by}
              setOrderBy={setOrderBy}
            />
          </Grid>
          <Pagination
            pagenumber={pagenumber}
            setPagenumber={setPagenumber}
            countperpage={countperpage}
            setCountperpage={setCountperpage}
            count={props.complaints.length}
          />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const complaintsSelector = ComplaintsSelector(state.complaints);
  const propertiesSelector = PropertiesSelector(state.properties);
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
    complaints: complaintsSelector.getComplaintsData().data,
    properties: propertiesSelector.getPropertiesData().data,
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
