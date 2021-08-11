import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormLabel,
  FormControl,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Phone, AccountBox } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useStyles from "./ScheduleVisit.styles";
import { EMAIL_TYPE } from "../../../constant";

const FROM_TIME = '10:00am';
const TO_TIME = '06:00pm';

export default function ScheduleVisit(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      user_email: email,
      type: EMAIL_TYPE.VISIT,
      owner_email: props.owner,
      property_name: props.property_name,
      property_id: props.property_id,
      date: selectedDate,
      from_time: FROM_TIME,
      to_time: TO_TIME,
    };
    fetch("http://localhost:4000/api/emails/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
    setOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    toast("Visit has been scheduled successfully!");
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return (
    <React.Fragment>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Schedule Visit
      </Button>
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
            <Typography component="h1" variant="h6" color="primary">
              Schedule Visit
            </Typography>

            <img
              src="schedulevisit.png"
              alt="Not available"
              className={classes.imgStyle}
            />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Typography
            component="h1"
            variant="subtitle1"
            color="primary"
            className={classes.textAlign}
          >
            Open from 10:00am to 06:00pm
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
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
                  maxDate={date}
                  className={classes.dateComponentSize}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <TextField
              id="standard-basic"
              label="Name"
              value={name}
              fullwidth
              InputProps={{
                endAdornment: <AccountBox className={classes.iconStyle} />,
              }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Email"
              value={email}
              fullwidth
              InputProps={{
                endAdornment: <EmailIcon className={classes.iconStyle} />,
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Phone"
              value={phone}
              fullwidth
              InputProps={{
                endAdornment: <Phone className={classes.iconStyle} />,
              }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </React.Fragment>
  );
}
