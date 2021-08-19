import React from "react";
import { TextField, FormLabel, FormControl, Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useStyles from "./BookProperty.styles";
import FormImage from "components/formimage/FormImage";
import TextFieldNew from "components/textfield/Textfield";
import Datepicker from "../../../components/datepicker/Datepicker";
import CheckoutWithStripe from "../payment/CheckoutWithStripe";

export default function BookProperty(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState(props.user.email || "");
  const [rent, setRent] = React.useState(props.property.rent || 15000.0);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <TextFieldNew
          type="standardForm"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="Email"
          id="standard-disabled"
          disabled
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
            value={props.property.rent}
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
        <CheckoutWithStripe
          rent={rent}
          property={props.property}
          user={props.user}
          updateUser={props.updateUser}
          handleBookProperty={props.handleBookProperty}
        />
      </FormControl>
    </div>
  );
}
