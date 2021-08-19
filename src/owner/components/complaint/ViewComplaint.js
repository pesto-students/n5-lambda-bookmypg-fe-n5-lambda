import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles/ViewComplaint.styles";
import CloseButton from "components/closebutton/CloseButton";
import Button from "components/button/Button";
import Link from "components/link/Link";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";
import Select from "components/select/Select";

const listitems = ["Pending", "Resolved"];

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
      <Link text={props.value} handelClick={handleClickOpen} href="#" />
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
            <Typography type="FormTitle" text="Complaint Details" />
            <FormImage imageName="Raisecomplaint.jpg" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid spacing={3} className={classes.containerStyle}>
            <TextField
              label="Complaint Raisedby"
              defaultValue="Monali"
              icon="Name"
            />

            <TextField
              label="Email"
              defaultValue="abc@gmail.com"
              icon="Email"
            />

            <TextField label="Phone" defaultValue="12345" icon="Phone" />

            <TextField
              label="Complaint Date"
              defaultValue="12/07/2021"
              icon="Event"
            />

            <TextField
              label="Description"
              value="Air conditioner is not working."
              maxrows={2}
              multiline={true}
              icon="Description"
            />

            <TextField
              label="Remarks"
              defaultValue="-"
              maxrows={4}
              multiline={true}
              icon="Comment"
              type="standardForm"
            />

            <Select
              name="Complaint Status"
              value={status}
              setValue={setStatus}
              listitems={listitems}
            />
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
