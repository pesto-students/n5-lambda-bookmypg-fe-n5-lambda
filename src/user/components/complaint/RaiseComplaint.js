import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import TextField from "components/textfield/Textfield";

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState(props.user ? props.user.email : "");
  const [phone, setPhone] = React.useState(props.user ? props.user.phone : "");
  const [details, setDetails] = React.useState("");

  const [detailsError, setDetailsError] = React.useState({
    helperText: "",
    error: false,
  });

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

        <DialogContent>
          <Grid spacing={2} className={classes.gridStyle}>
            <Grid item>
              <TextField
                value={get(props, "property.name") ? props.property.name : ""}
                icon="Name"
                label="Property Name"
              />
            </Grid>
            <Grid item>
              <TextField label="Email" value={email} icon="Email" />
            </Grid>
            <Grid item>
              <TextField label="Contact no" value={phone} icon="Phone" />
            </Grid>
            <Grid item>
              <TextField
                type="standardFormValidation"
                label="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                multiline={true}
                rows={4}
                error={detailsError.error}
                onFocus={() =>
                  setDetailsError({ helperText: "", error: false })
                }
                onBlur={() =>
                  setDetailsError({
                    helperText: "Details are required",
                    error: details.trim() === "",
                  })
                }
                helperText={detailsError.error ? detailsError.helperText : ""}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button
            text="Submit"
            disabled={detailsError.error || details.trim() === ""}
            handleClick={handleSubmit}
          />
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
