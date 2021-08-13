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
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles/ReviewProperty.styles";
import Button from "../../../components/button/Button";
import CloseButton from "../../../components/closebutton/CloseButton";
import FormImage from "components/formimage/FormImage";

export default function ReviewProperty(props) {
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
    <div>
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
              <Rating size="large" />
            </Grid>
            <TextField
              id="outlined-basic"
              label="Write your review here"
              variant="outlined"
              multiline
              rows={2}
              maxRows={4}
              fullWidth
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