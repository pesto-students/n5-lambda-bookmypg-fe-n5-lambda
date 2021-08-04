import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";

import CheckoutWithStripe from "../views/CheckoutWithStripe";

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: "center",
    margin: 10,
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [rent, setRent] = React.useState(15000.0);
  const [stripeOpen, setStripeOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePayment = () => {
    if (value === "Pay Online") {
      setStripeOpen(true);
    }
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Book Property
      </Button>
      {/* <CheckoutWithStripe rent={rent} /> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialogbutton}
      >
        <DialogTitle id="form-dialog-title">Book Property</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide your details here:
          </DialogContentText>
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <TextField
              id="standard-disabled"
              label="Email"
              value={email}
              fullwidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="When you want to move in?"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  disablePast={true}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <TextField
              disabled
              id="standard-disabled"
              label="Rent"
              value={rent}
              fullwidth
              onChange={(e) => setRent(e.target.value)}
            />
            <RadioGroup
              aria-label="gender"
              name="payment"
              value={value}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="Pay Online"
                control={<Radio />}
                label="Pay Online"
              />
              <FormControlLabel
                value="Pay at Property"
                control={<Radio />}
                label="Pay at Property"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>

        <DialogActions className={classes.button}>
          <Button variant="contained" color="secondary" onClick={handlePayment}>
            Submit
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
