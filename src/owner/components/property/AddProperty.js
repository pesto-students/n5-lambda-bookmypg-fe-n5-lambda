import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Grid,
} from "@material-ui/core";
import { isEmpty, get } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles/AddProperty.styles";
import Button from "../../../components/button/Button";
import CloseButton from "../../../components/closebutton/CloseButton";
import Typography from "../../../components/typography/Typography";
import TextField from "../../../components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";
import Link from "../../../components/link/Link";
import MultiSelect from "components/multiselect/Multiselect";
import Select from "components/select/Select";
import UploadPhotos from "components/multipleimageupload/MultipleImageUpload";
import TimePicker from "components/datepicker/Datepicker";

export default function AddProperty(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [totalbeds, setTotalBeds] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [amenities, setAmenitis] = React.useState([]);
  const [rent, setRent] = React.useState("");
  const [photos, setPhotos] = React.useState([]);
  const [gender, setGender] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const [status, setStatus] = React.useState("");

  let amenitiesList = [];
  if (get(props, "amenities.length") && isEmpty(amenitiesList)) {
    props.amenities.map((amenity) => {
      amenitiesList.push({ value: amenity._id, label: amenity.name });
    });
  }

  let locationsList = [];
  if (get(props, "locations.length") && isEmpty(locationsList)) {
    props.locations.map((location) => {
      locationsList.push({ value: location._id, label: location.name });
    });
  }

  const genderlist = ["Male", "Female", "Other"];

  const getLocationId = () => {
    const selectedLocation = props.locations.filter(
      (l) => l.name === location
    )[0]._id;
    return selectedLocation;
  };

  const getAmenityIds = () => {
    const selectedAmenities = [];
    amenities.map((amenity) => {
      selectedAmenities.push(
        props.amenities.filter((a) => a.name === amenity)[0]._id
      );
    });
    return selectedAmenities;
  };

  const handleSubmit = () => {
    const params = {
      name,
      totalbeds,
      isactive: true,
      location: getLocationId(),
      address,
      description,
      rent,
      gender,
      photos,
      owner: props.user._id,
      amenities: getAmenityIds(),
    };
    const user = props.user;
    props.addProperty({ params, user });
    setOpen(false);
    toast("Property has been added successfully!");
    setName("");
    setTotalBeds("");
    setLocation("");
    setAddress("");
    setDescription("");
    setRent("");
    setGender("");
    setAmenitis([]);
    setPhotos([]);
    setTimeout(() => {props.setRefresh(!props.refresh)}, 500);
  };

  return (
    <div>
      {props.mode === "Edit" ? (
        <div className={classes.buttonStyle}>
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
                  <TextField
                    type="standardForm"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    type="standardForm"
                    label="Total Beds"
                    value={totalbeds}
                    onChange={(e) => setTotalBeds(e.target.value)}
                  />
                  <TextField
                    type="standardForm"
                    label="Address"
                    multiline={true}
                    rows={4}
                  />
                  <Select
                    name="Location"
                    value={status}
                    setValue={setStatus}
                    listitems={locationsList.map((l) => l.label)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="standardForm"
                    label="Rent"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                  />
                  <TextField
                    type="standardForm"
                    label="Total Beds"
                    value={totalbeds}
                    onChange={(e) => setTotalBeds(e.target.value)}
                  />
                  <TextField
                    type="standardForm"
                    label="Description"
                    multiline={true}
                    rows={4}
                  />
                  <MultiSelect
                    name="Amenities"
                    listitems={amenitiesList.map((a) => a.label)}
                    value={amenities}
                    setValue={setAmenitis}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.button}>
              <Button text="Submit" handleClick={handleSubmit} />
              <Button text="Cancel" handleClick={handleClose} />
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <div className={classes.buttonStyle}>
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
                  <TextField
                    type="standardForm"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <TextField
                    type="standardForm"
                    label="Address"
                    multiline={true}
                    rows={4}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Select
                    name="Location"
                    value={location}
                    setValue={setLocation}
                    listitems={locationsList.map((l) => l.label)}
                  />
                  <Select
                    name="Gender"
                    listitems={genderlist}
                    value={gender}
                    setValue={setGender}
                  />
                  <TimePicker type="TimePicker" label="Visit Open From:" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="standardForm"
                    label="Total Beds"
                    value={totalbeds}
                    onChange={(e) => setTotalBeds(e.target.value)}
                  />
                  <TextField
                    type="standardForm"
                    label="Description"
                    multiline={true}
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <MultiSelect
                    name="Amenities"
                    listitems={amenitiesList.map((a) => a.label)}
                    value={amenities}
                    setValue={setAmenitis}
                  />
                  <TextField
                    type="standardForm"
                    label="Rent"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                  />

                  <TimePicker type="TimePicker" label="Visit Open Till:" />
                </Grid>

                <UploadPhotos
                  name="Upload Property Photos"
                  setPhotos={setPhotos}
                />
              </Grid>
            </DialogContent>
            <DialogActions className={classes.button}>
              <Button text="Submit" handleClick={handleSubmit} />
              <Button text="Cancel" handleClick={handleClose} />
            </DialogActions>
          </Dialog>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
