import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormLabel,
  FormControl,
  Typography,
  Box,
} from "@material-ui/core";
import { Phone, AccountBox } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./ScheduleVisit.styles";
import Button from "../../../components/button/Button";
import Datepicker from "../../../components/datepicker/Datepicker";
import CloseButton from "../../../components/closebutton/CloseButton";
import FormImage from "components/formimage/FormImage";
import { EMAIL_TYPE } from "../../../constant";

const FROM_TIME = "10:00am";
const TO_TIME = "06:00pm";

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
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return (
    <React.Fragment>
      <Button text="Schedule Visit" handleClick={handleClickOpen} />
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
            <Typography component="h1" variant="h6" color="primary">
              Schedule Visit
            </Typography>

            <FormImage imageName="Schedulevisit.png" />
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
            <Datepicker
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              maxdate={date}
            />

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
          <Button text="Submit" handleClick={handleSubmit} />
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </React.Fragment>
  );
}
