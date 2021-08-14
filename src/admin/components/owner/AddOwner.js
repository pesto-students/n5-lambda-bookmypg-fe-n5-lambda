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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles/AddOwner.styles";

export default function AddOwner(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.addOwner({
      firstName,
      lastName,
      email,
      phone,
      role: 'owner',
      onboardedAt: new Date(),
    });
    setOpen(false);
    toast("Owner has been added successfully!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    props.setOwner(true);
  }

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
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.textfieldStyle}
              />
              <TextField
                id="standard-basic"
                label="Contact no"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={classes.textfieldStyle}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
