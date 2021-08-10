import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "../../../components/button/Button";
import useStyles from "./BookProperty.styles";
import CloseButton from "../../../components/closebutton/CloseButton";

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
      <Button text="Book Property" handleClick={handleClickOpen} />
      {/* <CheckoutWithStripe rent={rent} /> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            width: "calc(478px + 0.5vw)",
          },
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <Box flexGrow={1}></Box>
          <Box>
            <CloseButton handleClick={handleClose} />
          </Box>
        </Box>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          <div className={classes.textAlign}>
            <Typography component="h1" variant="h6" color="primary" paragraph>
              Book Property
            </Typography>
          </div>
          <img
            src="Bookproperty.jpg"
            alt="No image available"
            className={classes.imgStyle}
          />
        </DialogTitle>
        <DialogContent className={classes.formAlign}>
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
                  className={classes.dateComponentSize}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <div style={{ display: "flex" }}>
              <TextField
                disabled
                id="standard-disabled"
                label="Rent"
                defaultValue={rent}
                fullwidth
                InputProps={{
                  endAdornment: (
                    <img
                      src="../inrIcon.jpg"
                      className={classes.monetizationStyle}
                    />
                  ),
                }}
                className={classes.textfieldStyle}
                onChange={(e) => setRent(e.target.value)}
              />
            </div>

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
          <Button text="Submit" />
          <Button text="Cancel" />
        </DialogActions>
      </Dialog>
    </div>
  );
}
