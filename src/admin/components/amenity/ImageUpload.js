import React from "react";
import useStyles from "./styles/ImageUpload.styles";
import { uploadImage } from "../../../aws";

const ImageUpload = (props) => {
  const classes = useStyles();

  const handleChange = async (e) => {
    const dirName = "amenity-logos/";
    if (e.target.files.length > 0) {
      const response = await uploadImage(e.target.files[0], dirName);
      props.setLogo(response);
    } else {
      props.setLogo("");
    }
  };

  return (
    <div className={classes.divStyle}>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        onChange={handleChange}
        onFocus={() => props.setIconError({ helperText: "", error: false })}
        onBlur={() =>
          props.setIconError({
            helperText: "Logo is required",
            error: props.logo.trim() === "",
          })
        }
      />
      <br></br>
    </div>
  );
};

export default ImageUpload;
