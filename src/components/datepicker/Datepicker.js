import React from "react";
import useStyles from "./Datepicker.styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
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
            disableFuture={true}
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
            disableFuture={true}
            className={classes.marginStyle}
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
            label="When you want to move in?"
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
