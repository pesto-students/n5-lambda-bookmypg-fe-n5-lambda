import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  button: {
    margin: 10,
  },
  dialogTitle: {
    alignSelf: "center",
    padding: "0px",
  },
  dialogBox: {
    width: "calc(1278px + 0.5vw)",
  },
  formAlign: {
    alignSelf: "center",
  },
  dateComponentSize: {
    width: "calc(278px + 0.5vw)",
  },
  imgStyle: {
    width: "70px",
    alignContent: "center",
    paddingLeft: "35px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
    textAlign: "left",
    margin: "0px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStylesLabel = makeStyles((theme) => ({
  root: {
    "&$disabled": {
      color: "#616161",
    },
  },
  disabled: {},
  notchedOutline: {},
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const classesLabel = useStylesLabel();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const date = new Date();

  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  date.setDate(date.getDate() + 7);
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Property
      </Button>
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
              Add New Property
            </Typography>
            <img
              src="addproperty.png"
              alt="No image available"
              className={classes.imgStyle}
            />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid
            container
            spacing={3}
            style={{
              textAlign: "center",

              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Name"
                defaultValue=""
                fullwidth
              />
              <TextField
                id="standard-basic"
                label="Total Beds"
                defaultValue=""
                fullwidth
                rows="4"
              />
              <TextField
                id="standard-basic"
                label="Address"
                defaultValue=""
                fullwidth
                multiline
              />
              <FormControl className={classes.formControl}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={status}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                </Select>
                <FormHelperText>Location</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Rent"
                defaultValue=""
                fullwidth
              />
              <TextField
                id="standard-basic"
                label="Total Beds"
                defaultValue=""
                fullwidth
                rows="4"
              />
              <TextField
                id="standard-basic"
                label="Description"
                defaultValue=""
                fullwidth
                multiline
              />
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
