import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  Grid,
  Link,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import ImageUpload from "./ImageUpload";
import useStyles from "./styles/AddAmenity.styles";

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
        <Link href="#" onClick={handleClickOpen}>
          {props.value}
        </Link>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Add Amenity
        </Button>
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
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          <div>
            <Typography component="h1" variant="h6" color="primary">
              {props.mode === "Edit" ? "Edit Amenity" : "Add New Amenity"}
            </Typography>
            <img
              src="addamenity.png"
              alt="No image available"
              className={classes.imgStyle}
            />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid container spacing={3} className={classes.containerStyle}>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Name"
                defaultValue=""
                className={classes.textfieldStyle}
              />
              <ImageUpload />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
