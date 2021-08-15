import React from "react";
import useStyles from "./Datepicker.styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatepickerComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "DisableFuture":
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="From Date:"
            value={props.selectedDate}
            onChange={props.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      );
    case "DisableFutureMargin":
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="From Date:"
            value={props.selectedDate}
            onChange={props.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            className={classes.marginStyle}
          />
        </MuiPickersUtilsProvider>
      );
    case "TimePicker":
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={props.selectedDate}
            onChange={props.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
      );
    default:
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label={props.label}
            value={props.selectedDate}
            onChange={props.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            disablePast={true}
            maxDate={props.maxdate}
            className={classes.dateComponentSize}
          />
        </MuiPickersUtilsProvider>
      );
  }
}
