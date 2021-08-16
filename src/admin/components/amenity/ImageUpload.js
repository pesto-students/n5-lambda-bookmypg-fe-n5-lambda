import React from "react";
import { FormLabel, IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles/ImageUpload.styles";
import { uploadImage } from "../../../aws";

const ImageUpload = (props) => {
  const classes = useStyles();

  const handleChange = async (e) => {
    const dirName = "amenity-logos/";
    const response = await uploadImage(e.target.files[0], dirName);
    props.setLogo(response);
  }

  return (
    <div className={classes.divStyle}>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
};

export default ImageUpload;
