import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./RaiseComplaint.styles";

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Complaint
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
          <div>
            <Typography component="h1" variant="h6" color="primary">
              Raise Complaint
            </Typography>
            <img
              src="complaint.jpg"
              alt="No image available"
              className={classes.imgStyle}
            />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid
            spacing={2}
            style={{
              textAlign: "center",

              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Grid item>
              <TextField
                disabled
                id="standard-disabled"
                label="Property Name"
                defaultValue="abc"
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
                id="standard-basic"
                label="Email"
                defaultValue="-"
                fullwidth
                className={classes.textfieldStyle}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Contact no"
                defaultValue="-"
                fullwidth
                className={classes.textfieldStyle}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Details"
                defaultValue=""
                fullwidth
                multiline
                rows="4"
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
