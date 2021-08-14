import React from "react";
import {
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import ImageUpload from "./ImageUpload";
import useStyles from "./styles/AddAmenity.styles";
import Button from "../../../components/button/Button";
import CloseButton from "../../../components/closebutton/CloseButton";
import Link from "../../../components/link/Link";
import Typography from "../../../components/typography/Typography";
import TextField from "../../../components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";

export default function AddAmenity(props) {
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
      {props.mode === "Edit" ? (
        <Link text={props.name} handelClick={handleClickOpen} href="#" />
      ) : (
        <Button text="Add Amenity" handleClick={handleClickOpen} />
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
              text={props.mode === "Edit" ? "Edit Amenity" : "Add New Amenity"}
            />
            <FormImage imageName="Addamenity.png" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid container spacing={3} className={classes.containerStyle}>
            <Grid item>
              <TextField type="standardForm" label="Name" icon="Name" />
              <ImageUpload />
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
