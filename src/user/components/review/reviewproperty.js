import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles/ReviewProperty.styles";

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
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          <div>
            <Typography component="h1" variant="h6" color="primary">
              Review {props.value}
            </Typography>

            <img
              src="ratetenant.png"
              alt="Not available"
              className={classes.imgStyle}
            />
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
