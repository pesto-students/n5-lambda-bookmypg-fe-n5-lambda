import React from "react";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";
import { Grid, Typography, TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Tablecomponent from "./OwnerTable";
import Pagination from "../pagination/Pagination";
import Addowner from "./AddOwner";
import useStyles from "./styles/OwnerListContent.styles";

export function OwnerlistContent(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.gridStyle}>
            <Typography component="h1" variant="h5">
              Owner List
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
                  className={classes.textfieldStyle}
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
              <Addowner />
            </Grid>
            <Tablecomponent complaints={props.complaints} />
          </Grid>
          <Pagination />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

export default OwnerlistContent;
