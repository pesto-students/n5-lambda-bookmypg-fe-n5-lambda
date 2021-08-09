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
import useStyles from "./ScheduleVisit.styles";

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
              alt="No image available"
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
          <Button variant="contained" color="secondary">
            Submit
          </Button>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
