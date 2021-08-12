import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "../responsivedrawer/responsivedrawer";
import { Grid } from "@material-ui/core";
import Tablecomponent from "components/table/Table";
import Pagination from "../pagination/pagination";
import ComplaintsSelector from "../ComplaintsSelector";
import complainsActions from "../../../redux-store/actions/complaintsActions";
import useStyles from "./styles/ComplaintListContent.styles";
import Datepicker from "../../../components/datepicker/Datepicker";
import Typography from "../../../components/typography/Typography";
import TextField from "../../../components/textfield/Textfield";

export function ComplaintsContent(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const classes = useStyles();
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
          <Grid item xs={12} md={10} className={classes.containerStyle}>
            <Typography text="Complaint List" type="ListTitle" />
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchboxStyle}>
                <TextField
                  type="standardForm"
                  label="Search by property name"
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
              complaints={props.complaints}
              switchData="name"
              sortingColumn="complaintdate"
            />
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
