import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Box,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { get } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./RaiseComplaint.styles";
import Button from "components/button/Button";
import FormImage from "components/formimage/FormImage";
import Typography from "components/typography/Typography";

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState(props.user ? props.user.email : "");
  const [phone, setPhone] = React.useState(props.user ? props.user.phone : "");
  const [details, setDetails] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      description: details,
      raisedby: props.user._id,
      property: props.property._id,
    };
    props.raiseComplaint({ user: props.user, params });
    setOpen(false);
    setEmail("");
    setPhone("");
    setDetails("");
    toast("Complaint has been registered successfully!");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button text="Complaint" handleClick={handleClickOpen} />

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
            <Typography type="FormTitle" text="Raise Complaint" />
            <FormImage imageName="Raisecomplaint.jpg" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid spacing={2} className={classes.gridStyle}>
            <Grid item>
              <TextField
                disabled
                id="standard-disabled"
                label="Property Name"
                value={get(props, "property.name") ? props.property.name : ""}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                label="Contact no"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                label="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                fullwidth
                multiline
                rows="4"
                className={classes.textfieldStyle}
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
