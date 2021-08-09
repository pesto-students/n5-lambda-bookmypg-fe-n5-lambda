import React from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  FormHelperText,
} from "@material-ui/core";
import useStyles from "./styles/addproperty.styles";
import Button from "../../../components/button/Button";
import CloseButton from "../../../components/closebutton/CloseButton";
import Typography from "../../../components/typography/Typography";

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
      <Button text="Add Property" handleClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            width: "calc(678px + 0.5vw)",
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
            <Typography type="FormTitle" text="Add New Property" />
            <img
              src="addproperty.png"
              alt="No image available"
              className={classes.imgStyle}
            />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid container spacing={3} className={classes.containerStyle}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Name"
                defaultValue=""
                fullwidth
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Total Beds"
                defaultValue=""
                fullwidth
                rows="4"
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Address"
                defaultValue=""
                fullwidth
                multiline
                rows="4"
                className={classes.textfieldStyle}
              />
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={status}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                </Select>
              </FormControl>
              <FormHelperText>Location</FormHelperText>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Rent"
                defaultValue=""
                fullwidth
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Total Beds"
                defaultValue=""
                fullwidth
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Description"
                defaultValue=""
                fullwidth
                multiline
                rows="4"
                className={classes.textfieldStyle}
              />
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={status}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="Mumbai">Air Conditioner</MenuItem>
                  <MenuItem value="Delhi">Washing Machine</MenuItem>
                </Select>
              </FormControl>
              <FormHelperText>Amenities</FormHelperText>
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
