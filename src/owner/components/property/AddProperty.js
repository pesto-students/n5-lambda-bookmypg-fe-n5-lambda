import React, { useState } from "react";
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
import Button from "components/button/Button";
import CloseButton from "components/closebutton/CloseButton";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";
import Link from "components/link/Link";
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

  const [nameError, setNameError] = useState({
    helperText: "",
    error: false,
  });
  const [totalbedsError, setTotalBedsError] = useState({
    helperText: "",
    error: false,
  });
  const [addressError, setAddressError] = useState({
    helperText: "",
    error: false,
  });
  const [descriptionError, setDescriptionError] = useState({
    helperText: "",
    error: false,
  });
  const [rentError, setRentError] = useState({
    helperText: "",
    error: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setTotalBeds("");
    setLocation("");
    setAddress("");
    setDescription("");
    setRent("");
    setGender("");
    setAmenitis([]);
    setPhotos([]);
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
    setTimeout(() => {
      props.setRefresh(!props.refresh);
    }, 500);
  };

  const submitDisabled = () => {
    let flag = false;
    if (
      nameError.error ||
      totalbedsError.error ||
      addressError.error ||
      descriptionError.error ||
      rentError.error ||
      locationError.error ||
      name.trim() === "" ||
      address.trim() === "" ||
      location.trim() === "" ||
      totalbeds.trim() === "" ||
      description.trim() === "" ||
      gender.trim() === "" ||
      isEmpty(amenities) ||
      isEmpty(photos)
    )
      flag = true;
    return flag;
  };

  const validateNumbers = (type) => {
    if (type === "Beds") {
      if (totalbeds) {
        if (isNaN(totalbeds) || totalbeds < 1 || totalbeds > 50) {
          setTotalBedsError({
            helperText: "Must be valid numeric between 1-50",
            error: true,
          });
        }
      } else {
        setTotalBedsError({
          helperText: "Must be valid numeric between 1-50",
          error: true,
        });
      }
    } else {
      if (rent) {
        if (isNaN(rent) || rent < 500 || rent > 100000) {
          setRentError({
            helperText: "Must be valid numeric between 500-100000",
            error: true,
          });
        }
      } else {
        setRentError({
          helperText: "Must be valid numeric",
          error: true,
        });
      }
    }
  };

  return (
    <div>
      {props.mode === "Edit" ? (
        <div className={classes.gridStyle}>
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
                    type="standardFormValidation"
                    label="Name"
                    value={name}
                    error={nameError.error}
                    onFocus={() =>
                      setNameError({ helperText: "", error: false })
                    }
                    onBlur={() =>
                      setNameError({
                        helperText: "Name is required",
                        error: name.trim() === "",
                      })
                    }
                    onChange={(e) => setName(e.target.value)}
                    helperText={nameError.error ? nameError.helperText : ""}
                  />

                  <TextField
                    type="standardFormValidation"
                    label="Address"
                    multiline={true}
                    rows={4}
                    value={address}
                    error={addressError.error}
                    onFocus={() =>
                      setAddressError({ helperText: "", error: false })
                    }
                    onBlur={() =>
                      setAddressError({
                        helperText: "Address is required",
                        error: address.trim() === "",
                      })
                    }
                    onChange={(e) => setAddress(e.target.value)}
                    helperText={
                      addressError.error ? addressError.helperText : ""
                    }
                  />
                  <Select
                    name="Location"
                    value={location}
                    setValue={setLocation}
                    listitems={locationsList.map((l) => l.label)}
                    type="SelectValidation"
                    error={locationError.error}
                    onFocus={() =>
                      setLocationError({ helperText: "", error: false })
                    }
                    onBlur={() =>
                      setLocationError({
                        helperText: "Location is required",
                        error: location.trim() === "",
                      })
                    }
                    onChange={(e) => setLocation(e.target.value)}
                    helperText={
                      locationError.error ? locationError.helperText : ""
                    }
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
                    type="standardFormValidation"
                    label="Total Beds"
                    value={totalbeds}
                    onChange={(e) => setTotalBeds(e.target.value)}
                    error={totalbedsError.error}
                    onFocus={() =>
                      setTotalBedsError({ helperText: "", error: false })
                    }
                    onBlur={() => validateNumbers("Beds")}
                    helperText={
                      totalbedsError.error ? totalbedsError.helperText : ""
                    }
                  />
                  <TextField
                    type="standardFormValidation"
                    label="Description"
                    multiline={true}
                    rows={4}
                    value={description}
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
                    onChange={(e) => setDescription(e.target.value)}
                    helperText={
                      descriptionError.error ? descriptionError.helperText : ""
                    }
                  />
                  <MultiSelect
                    name="Amenities"
                    listitems={amenitiesList.map((a) => a.label)}
                    value={amenities}
                    setValue={setAmenitis}
                  />
                  <TextField
                    type="standardFormValidation"
                    label="Rent"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    error={rentError.error}
                    onFocus={() =>
                      setRentError({ helperText: "", error: false })
                    }
                    onBlur={() => validateNumbers("Rent")}
                    helperText={rentError.error ? rentError.helperText : ""}
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
              <Button text="Submit" disabled={submitDisabled()} handleClick={handleSubmit} />
              <Button text="Cancel" handleClick={handleClose} />
            </DialogActions>
          </Dialog>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
