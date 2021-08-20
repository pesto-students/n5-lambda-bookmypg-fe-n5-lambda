import React from "react";
import {
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles/ReviewProperty.styles";
import Button from "../../../components/button/Button";
import CloseButton from "../../../components/closebutton/CloseButton";
import FormImage from "components/formimage/FormImage";
import { SERVER_URL } from "constant";

export default function ReviewProperty(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [rating, setRating] = React.useState("");

  const [descriptionError, setDescriptionError] = React.useState({
    helperText: "",
    error: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const payload = {
      description,
      rating: parseInt(rating),
      reviewedby: props.user_id,
      property: props.property_id,
    };
    await fetch(`${SERVER_URL}/api/reviews/`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast("Review has been posted successfully!");
    setOpen(false);
  };

  const submitDisabled = () => {
    let flag = false;
    if (
      descriptionError.error ||
      description.trim() === "" ||
      rating.trim() === ""
    )
      flag = true;
    return flag;
  };

  const date = new Date();
  date.setDate(date.getDate() + 7);
  return (
    <>
      <Link href="#" onClick={handleClickOpen}>
        Click here
      </Link>
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
            <Typography component="h1" variant="h6" color="primary">
              Review {props.value}
            </Typography>

            <FormImage imageName="Ratetenant.png" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid spacing={3} className={classes.mainboxStyle}>
            <Grid item>
              <Typography component="h1" variant="subtitle1" color="primary">
                Please share your experience with the property!
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                size="large"
              />
            </Grid>
            <TextField
              id="outlined-basic"
              label="Write your review here"
              multiline
              rows={2}
              maxRows={4}
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              error={descriptionError.error}
              onFocus={() =>
                setDescriptionError({ helperText: "", error: false })
              }
              onBlur={() =>
                setDescriptionError({
                  helperText: "Description is required",
                  error: description.trim() === "",
                })
              }
              helperText={
                descriptionError.error ? descriptionError.helperText : ""
              }
            />
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button
            text="Submit"
            disabled={submitDisabled()}
            handleClick={handleSubmit}
          />
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </>
  );
}
