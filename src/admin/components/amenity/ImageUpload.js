import React, { useState } from "react";
import { FormLabel, IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles/ImageUpload.styles";

const ImageUpload = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.divStyle}>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          className={classes.inputStyle}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className={classes.iconStyle}
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <FormLabel component="legend" className={classes.labelStyle}>
          *Please upload an Image
        </FormLabel>
      </div>
    </div>
  );
};

export default ImageUpload;
