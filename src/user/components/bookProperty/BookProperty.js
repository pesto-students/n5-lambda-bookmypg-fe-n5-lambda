import React from "react";
import {
  Button,
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
  IconButton,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CloseIcon from "@material-ui/icons/Close";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import useStyles from "./BookProperty.styles";

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
        PaperProps={{
          style: {
            width: "calc(478px + 0.5vw)",
          },
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <Box flexGrow={1}></Box>
          <Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          <div className={classes.textAlign}>
            <Typography component="h1" variant="h6" color="primary" paragraph>
              Book Property
            </Typography>
          </div>
          <img
            src={require("../../../user/assets/images/Bookproperty.jpg")}
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
                    <MonetizationOnIcon className={classes.monetizationStyle} />
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
