import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  Grid,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./styles/AddOwner.styles";

export default function AddOwner(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = new Date();
  date.setDate(date.getDate() + 7);

  return (
    <div className={classes.buttonStyle}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Owner
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
        <Box className={classes.boxStyle}>
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
              Add New Owner
            </Typography>
            <img
              src="addowner.jpg"
              alt="No image available"
              className={classes.imgStyle}
            />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid
            container
            spacing={3}
            style={{
              textAlign: "center",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Grid item>
              <TextField
                id="standard-basic"
                label="Name"
                defaultValue=""
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Email"
                defaultValue=""
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Contact no"
                defaultValue=""
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