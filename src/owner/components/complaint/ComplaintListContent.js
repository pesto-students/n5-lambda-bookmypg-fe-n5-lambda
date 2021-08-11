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

export function ComplaintsContent(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const classes = useStyles();

  const [pagenumber, setPagenumber] = React.useState(1);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    props.resetComplaints();
  }, []);

  useEffect(() => {
    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}`;
    const user = props.user;
    props.getComplaints({ extraParams, user });
  }, [pagenumber, countperpage, search]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    disableFuture={true}
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
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    disableFuture={true}
                    style={{ marginLeft: "10px" }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Tablecomponent complaints={complaints} />
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
