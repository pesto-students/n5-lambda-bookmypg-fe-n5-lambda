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
import useStyles from "./ScheduleVisit.styles";
import Button from "../../../components/button/Button";
import Datepicker from "../../../components/datepicker/Datepicker";
import CloseButton from "../../../components/closebutton/CloseButton";
import FormImage from "components/formimage/FormImage";

export default function ScheduleVisit() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return (
    <div>
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
              defaultValue=""
              fullwidth
              InputProps={{
                endAdornment: <AccountBox className={classes.iconStyle} />,
              }}
            />
            <TextField
              id="standard-basic"
              label="Email"
              defaultValue=""
              fullwidth
              InputProps={{
                endAdornment: <EmailIcon className={classes.iconStyle} />,
              }}
            />
            <TextField
              id="standard-basic"
              label="Phone"
              defaultValue=""
              fullwidth
              InputProps={{
                endAdornment: <Phone className={classes.iconStyle} />,
              }}
            />
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
