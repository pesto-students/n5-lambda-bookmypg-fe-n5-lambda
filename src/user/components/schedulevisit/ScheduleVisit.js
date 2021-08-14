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
import useStyles from "./ScheduleVisit.styles";
import Button from "../../../components/button/Button";
import Datepicker from "../../../components/datepicker/Datepicker";
import CloseButton from "../../../components/closebutton/CloseButton";
import FormImage from "components/formimage/FormImage";
import TextField from "components/textfield/Textfield";
import Typography from "../../../components/typography/Typography";

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
            <TextField type="standardForm" label="Name" value="" icon="Name" />

            <TextField
              type="standardForm"
              label="Email"
              value=""
              icon="Email"
            />
            <TextField
              type="standardForm"
              label="Phone"
              value=""
              icon="Phone"
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
