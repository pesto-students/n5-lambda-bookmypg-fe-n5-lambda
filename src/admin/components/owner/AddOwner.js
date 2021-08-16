import React from "react";
import {
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles/AddOwner.styles";
import Button from "components/button/Button";
import Link from "components/link/Link";
import CloseButton from "components/closebutton/CloseButton";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";

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
      role: "owner",
      onboardedAt: new Date(),
    });
    setOpen(false);
    toast("Owner has been added successfully!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    props.setOwner(true);
  };
  const date = new Date();
  date.setDate(date.getDate() + 7);

  return (
    <div className={classes.buttonStyle}>
      {props.mode === "Edit" ? (
        <Link text={props.name} handelClick={handleClickOpen} href="#" />
      ) : (
        <Button text="Add Owner" handleClick={handleClickOpen} />
      )}

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
            <Typography
              type="FormTitle"
              text={props.mode === "Edit" ? "Edit Owner" : "Add New Owner"}
            />
            <FormImage imageName="Addowner.jpg" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid container spacing={3} className={classes.containerStyle}>
            <Grid item>
              <TextField
                type="standardForm"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                icon="Name"
              />
              <TextField
                type="standardForm"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                icon="Name"
              />
              <TextField
                type="standardForm"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon="Email"
              />
              <TextField
                type="standardForm"
                label="Contact no"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                icon="Phone"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button text="Submit" handleClick={handleSubmit} />
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
