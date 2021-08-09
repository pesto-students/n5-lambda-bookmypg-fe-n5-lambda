import React from "react";
import {
  Button,
  Link,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  Typography,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles/ViewComplaint.styles";

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
      <Link href="#" onClick={handleClickOpen}>
        View
      </Link>
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
          <div>
            <Typography component="h1" variant="h6" color="primary">
              Complaint Details
            </Typography>
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
              <TextField
                disabled
                id="standard-disabled"
                label="Complaint Raisedby"
                defaultValue="Monali"
                fullwidth
                className={classes.textfieldStyle}
                InputProps={{
                  classes: {
                    root: classes.root,
                    disabled: classes.disabled,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                id="standard-disabled"
                label="Email"
                defaultValue="abc@gmail.com"
                fullwidth
                className={classes.textfieldStyle}
                InputProps={{
                  classes: {
                    root: classes.root,
                    disabled: classes.disabled,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                id="standard-disabled"
                label="Phone"
                defaultValue="12345"
                fullwidth
                className={classes.textfieldStyle}
                InputProps={{
                  classes: {
                    root: classes.root,
                    disabled: classes.disabled,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                id="standard-disabled"
                label="Complaint Date"
                defaultValue="12/07/2021"
                fullwidth
                className={classes.textfieldStyle}
                InputProps={{
                  classes: {
                    root: classes.root,
                    disabled: classes.disabled,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                id="standard-disabled"
                label="Description"
                defaultValue="Air conditioner is not working."
                fullwidth
                multiline
                maxRows={4}
                className={classes.textfieldStyle}
                InputProps={{
                  classes: {
                    root: classes.root,
                    disabled: classes.disabled,
                  },
                }}
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
                id="standard-basic"
                label="Remarks"
                defaultValue="-"
                fullwidth
                multiline
                maxRows={4}
                className={classes.textfieldStyle}
              />
            </Grid>
          </Grid>
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
