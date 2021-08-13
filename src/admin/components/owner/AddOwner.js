import React from "react";
import {
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import useStyles from "./styles/AddOwner.styles";
import Button from "../../../components/button/Button";
import CloseButton from "../../../components/closebutton/CloseButton";
import Typography from "../../../components/typography/Typography";
import TextField from "components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";

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
      <Button text="Add Owner" handleClick={handleClickOpen} />

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
            <Typography type="FormTitle" text="Add New Owner" />
            <FormImage imageName="Addowner.jpg" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid container spacing={3} className={classes.containerStyle}>
            <Grid item>
              <TextField type="standardForm" label="Name" />
              <TextField type="standardForm" label="Email" />
              <TextField type="standardForm" label="Contact no" />
            </Grid>
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
