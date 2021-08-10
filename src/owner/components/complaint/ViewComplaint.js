import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import useStyles from "./styles/ViewComplaint.styles";
import CloseButton from "../../../components/closebutton/CloseButton";
import Button from "../../../components/button/Button";
import Link from "../../../components/link/Link";
import Typography from "../../../components/typography/Typography";
import TextField from "../../../components/textfield/Textfield";

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = new Date();

  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  date.setDate(date.getDate() + 7);
  return (
    <div>
      <Link text="View" handelClick={handleClickOpen} href="#" />
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
          <div>
            <Typography type="FormTitle" text="Complaint Details" />
            <img
              src="complaint.jpg"
              alt="No image available"
              className={classes.imgStyle}
            />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid spacing={3} className={classes.containerStyle}>
            <Grid item>
              <TextField label="Complaint Raisedby" defaultValue="Monali" />
            </Grid>
            <Grid item>
              <TextField label="Email" defaultValue="abc@gmail.com" />
            </Grid>
            <Grid item>
              <TextField label="Phone" defaultValue="12345" />
            </Grid>
            <Grid item>
              <TextField label="Complaint Date" defaultValue="12/07/2021" />
            </Grid>
            <Grid item>
              <TextField
                label="Description"
                defaultValue="Air conditioner is not working."
                maxrows={4}
                multiline={true}
              />
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={status}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Resolved">Resolved</MenuItem>
                </Select>
                <FormHelperText>Complaint Status</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                label="Remarks"
                defaultValue="-"
                maxrows={4}
                multiline={true}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button text="Submit" />
          <Button text="Cancel" />
        </DialogActions>
      </Dialog>
    </div>
  );
}
