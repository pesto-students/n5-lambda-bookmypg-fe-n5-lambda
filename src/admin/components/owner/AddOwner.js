import React, { useState } from "react";
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

  const [firstNameError, setFirstNameError] = useState({
    helperText: "",
    error: false,
  });
  const [lastNameError, setLastNameError] = useState({
    helperText: "",
    error: false,
  });
  const [emailError, setEmailError] = useState({
    helperText: "",
    error: false,
  });
  const [phoneError, setPhoneError] = useState({
    helperText: "",
    error: false,
  });

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
    setTimeout(() => {
      props.setRefresh(!props.refresh);
    }, 500);
  };
  const date = new Date();
  date.setDate(date.getDate() + 7);

  const validateEmail = () => {
    // regular rexpression to validate the email for gmail address
    const regex = new RegExp("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$");
    if (email) {
      if (!regex.test(email.trim())) {
        setEmailError({
          helperText: "Invalid gmail address",
          error: true,
        });
      }
    } else {
      setEmailError({
        helperText: "Invalid gmail address",
        error: true,
      });
    }
  };

  const validatePhone = () => {
    // regular rexpression to validate the phone number
    const regex = new RegExp("^[0-9]{10}$");
    if (phone) {
      if (!regex.test(phone.trim())) {
        setPhoneError({
          helperText: "Invalid phone number",
          error: true,
        });
      }
    } else {
      setPhoneError({
        helperText: "Invalid phone number",
        error: true,
      });
    }
  };

  const hasError = () => {
    return (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      (phone.length >= 0 && phone.length < 10) ||
      email.length === 0 ||
      firstNameError.error ||
      lastNameError.error ||
      phoneError.error ||
      emailError.error
    );
  };

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
                type="standardFormValidation"
                label="First Name"
                value={firstName}
                error={firstNameError.error}
                onFocus={() =>
                  setFirstNameError({ helperText: "", error: false })
                }
                onBlur={() =>
                  setFirstNameError({
                    helperText: "First name is required",
                    error: firstName.trim() === "",
                  })
                }
                onChange={(e) => setFirstName(e.target.value)}
                helperText={
                  firstNameError.error ? firstNameError.helperText : ""
                }
                icon="Name"
              />
              <TextField
                type="standardFormValidation"
                label="Last Name"
                value={lastName}
                error={lastNameError.error}
                onFocus={() =>
                  setLastNameError({ helperText: "", error: false })
                }
                onBlur={() =>
                  setLastNameError({
                    helperText: "Last name is required",
                    error: lastName.trim() === "",
                  })
                }
                onChange={(e) => setLastName(e.target.value)}
                helperText={lastNameError.error ? lastNameError.helperText : ""}
                icon="Name"
              />
              <TextField
                type="standardFormValidation"
                label="Email"
                value={email}
                error={emailError.error}
                onFocus={() => setEmailError({ helperText: "", error: false })}
                onBlur={validateEmail}
                onChange={(e) => setEmail(e.target.value)}
                helperText={emailError.error ? emailError.helperText : ""}
                icon="Email"
              />
              <TextField
                type="standardFormValidation"
                label="Contact no"
                value={phone}
                error={phoneError.error}
                onFocus={() => setPhoneError({ helperText: "", error: false })}
                onBlur={validatePhone}
                onChange={(e) => setPhone(e.target.value)}
                helperText={phoneError.error ? phoneError.helperText : ""}
                icon="Phone"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button
            text="Submit"
            handleClick={handleSubmit}
            disabled={hasError()}
          />
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
