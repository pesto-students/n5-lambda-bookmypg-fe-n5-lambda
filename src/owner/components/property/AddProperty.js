import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  FormHelperText,
} from "@material-ui/core";
import useStyles from "./styles/AddProperty.styles";
import Button from "../../../components/button/Button";
import CloseButton from "../../../components/closebutton/CloseButton";
import Typography from "../../../components/typography/Typography";
import TextField from "../../../components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";
import Link from "../../../components/link/Link";

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
    console.log(openEdit);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      {props.mode === "Edit" ? (
        <div>
          <Link text={props.name} handelClick={handleClickOpenEdit} href="#" />
          <Dialog
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="form-dialog-title"
            PaperProps={{
              style: {
                width: "calc(678px + 0.5vw)",
              },
            }}
          >
            <Box display="flex" alignItems="flex-start">
              <Box flexGrow={1}></Box>
              <Box>
                <CloseButton handleClick={handleCloseEdit} />
              </Box>
            </Box>
            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
              <div>
                <Typography type="FormTitle" text="Edit Property" />
                <FormImage imageName="Addproperty.png" />
              </div>
            </DialogTitle>

            <DialogContent className={classes.formAlign}>
              <Grid container spacing={3} className={classes.containerStyle}>
                <Grid item xs={12} sm={6}>
                  <TextField type="standardForm" label="Name" />
                  <TextField type="standardForm" label="Total Beds" />
                  <TextField
                    type="standardForm"
                    label="Address"
                    multiline={true}
                    rows={4}
                  />

                  <FormControl className={classes.formControl}>
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
                  </FormControl>
                  <FormHelperText>Location</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField type="standardForm" label="Rent" />
                  <TextField type="standardForm" label="Total Beds" />
                  <TextField
                    type="standardForm"
                    label="Description"
                    multiline={true}
                    rows={4}
                  />

                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={status}
                      onChange={handleChange}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="Mumbai">Air Conditioner</MenuItem>
                      <MenuItem value="Delhi">Washing Machine</MenuItem>
                    </Select>
                  </FormControl>
                  <FormHelperText>Amenities</FormHelperText>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.button}>
              <Button text="Submit" />
              <Button text="Cancel" />
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <div>
          <Button text="Add Property" handleClick={handleClickOpen} />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            PaperProps={{
              style: {
                width: "calc(678px + 0.5vw)",
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
                <Typography type="FormTitle" text="Add New Property" />
                <FormImage imageName="Addproperty.png" />
              </div>
            </DialogTitle>

            <DialogContent className={classes.formAlign}>
              <Grid container spacing={3} className={classes.containerStyle}>
                <Grid item xs={12} sm={6}>
                  <TextField type="standardForm" label="Name" />
                  <TextField type="standardForm" label="Total Beds" />
                  <TextField
                    type="standardForm"
                    label="Address"
                    multiline={true}
                    rows={4}
                  />

                  <FormControl className={classes.formControl}>
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
                  </FormControl>
                  <FormHelperText>Location</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField type="standardForm" label="Rent" />
                  <TextField type="standardForm" label="Total Beds" />
                  <TextField
                    type="standardForm"
                    label="Description"
                    multiline={true}
                    rows={4}
                  />

                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={status}
                      onChange={handleChange}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="Mumbai">Air Conditioner</MenuItem>
                      <MenuItem value="Delhi">Washing Machine</MenuItem>
                    </Select>
                  </FormControl>
                  <FormHelperText>Amenities</FormHelperText>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.button}>
              <Button text="Submit" />
              <Button text="Cancel" />
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
}
