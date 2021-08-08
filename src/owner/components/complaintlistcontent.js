import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "./responsivedrawer";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Tablecomponent from "./complainttable";

import Pagination from "./pagination";
import ComplaintsSelector from "./ComplaintsSelector";
import complainsActions from "../../redux-store/actions/complaintsActions";

export function ComplaintsContent(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  useEffect(() => {
    props.resetComplaints();
  }, []);

  useEffect(() => {
    props.getComplaints();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid
            item
            xs={12}
            md={10}
            style={{ padding: "8px", textAlign: "center" }}
          >
            <Typography component="h1" variant="h5">
              Complaint List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  padding: "18px",
                  paddingLeft: "0px",
                  textAlign: "center",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Search by property name"
                  style={{ width: "300px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  padding: "8px",
                  textAlign: "center",
                  display: "flex",
                }}
              >
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
                    disablePast={true}
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
                    disablePast={true}
                    style={{ marginLeft: "10px" }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Tablecomponent complaints={props.complaints} />
          </Grid>
          <Pagination />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const complaintsSelector = ComplaintsSelector(state.complaints);

  return {
    complaints: complaintsSelector.getComplaintsData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComplaints: () => dispatch(complainsActions.getComplaints()),
    // updateComplaint: (id) => dispatch(complainsActions.updateComplaint(id)),
    resetComplaints: () => dispatch(complainsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsContent);
