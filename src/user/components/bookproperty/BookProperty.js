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
import FormImage from "components/formimage/FormImage";
import TextFieldNew from "components/textfield/Textfield";
import Typography from "../../../components/typography/Typography";
import Datepicker from "../../../components/datepicker/Datepicker";
import CheckoutWithStripe from "../payment/CheckoutWithStripe";

export default function BookProperty(props) {
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
      {/*    <Button text="Book Property" handleClick={handleClickOpen} />
      <CheckoutWithStripe
        rent={rent}
        property={props.property}
        user={props.user}
      />
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
            <Typography type="FormTitle" text="Book Property" />
          </div>
          <FormImage imageName="Bookproperty.jpg" />
        </DialogTitle>
      <DialogContent className={classes.formAlign}>*/}
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <TextFieldNew
          type="standardForm"
          label="Email"
          value={email}
          onChange={setEmail}
          icon="Email"
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container>
            <Datepicker
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              label="When you want to move in?"
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <div className={classes.bookpropertyStyle}>
          <TextField
            disabled
            id="standard-disabled"
            label="Rent"
            defaultValue={rent}
            fullwidth
            InputProps={{
              endAdornment: (
                <FormImage imageName="RupeesIcon.jpg" type="icon" />
              ),
            }}
            className={classes.textfieldStyle}
            onChange={(e) => setRent(e.target.value)}
          />
        </div>

        {/*<RadioGroup
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
      
        </DialogContent>

        <DialogActions className={classes.button}>
          <Button text="Submit" />
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
              </Dialog>*/}
        <CheckoutWithStripe
          rent={rent}
          property={props.property}
          user={props.user}
        />
      </FormControl>
    </div>
  );
}
