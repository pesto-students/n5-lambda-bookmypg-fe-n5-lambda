import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  FormControl,
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
import TextField from "components/textfield/Textfield";
import Typography from "../../../components/typography/Typography";
import { SERVER_URL } from "constant";

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
      useremail: email,
      type: EMAIL_TYPE.VISIT,
      owneremail: props.owner,
      property_name: props.property_name,
      property_id: props.property_id,
      date: selectedDate,
      fromtime: FROM_TIME,
      totime: TO_TIME,
    };
    fetch(`${SERVER_URL}/api/emails/`, {
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
            <Typography type="FormTitle" text="Schedule Visit" />

            <FormImage imageName="Schedulevisit.png" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <div className={classes.textAlign}>
            <Typography
              type="SubTitleText"
              text="Open from 10:00am to 06:00pm"
            />
          </div>
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <Datepicker
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              maxdate={date}
              label="When you want to visit the place?"
            />
            <TextField
              id="standard-basic"
              type="standardForm"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon="Name"
            />
            <TextField
              id="standard-basic"
              type="standardForm"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon="Email"
            />
            <TextField
              type="standardForm"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              icon="Phone"
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
