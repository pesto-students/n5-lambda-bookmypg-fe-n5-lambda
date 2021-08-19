import React from "react";
import {
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import Button from "components/button/Button";
import CloseButton from "components/closebutton/CloseButton";
import Link from "components/link/Link";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUpload from "./ImageUpload";
import useStyles from "./styles/AddAmenity.styles";

export default function AddAmenity(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [logo, setLogo] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const params = { name, logo, isactive: true };
    const user = props.user;
    props.addAmenity({ params, user });
    setOpen(false);
    toast("Amenity has been added successfully!");
    setName("");
    setLogo("");
    setTimeout(() => {
      props.setAddAmenityState(!props.addAmenityState);
    }, 500);
  };

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
            width: "calc(378px + 0.5vw)",
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
              <TextField
                type="standardForm"
                label="Name"
                icon="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ImageUpload setLogo={setLogo} />
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
