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
import PropertyCard from "components/card/Card";

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

  return (
    <div className={classes.buttonStyle}>
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
        <DialogContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <PropertyCard type="OwnerProperty" property={property} />
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
