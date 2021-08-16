import React, { useState } from "react";
import useStyles from "./MultipleImageUpload.styles";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { uploadImage } from "../../aws";

export default function App(props) {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const uploadMultipleFiles = async (e) => {
    let keys = [];
    for (let i = 0; i < e.target.files.length; i++) {
      // setImages((oldArray) => [
      //   ...oldArray,
      //   URL.createObjectURL(e.target.files[i]),
      // ]);
      const dirName = "property-photos/61175205d6y6788uw66678e/";
      const response = await uploadImage(e.target.files[i], dirName);
      keys.push(response);
    }
      props.setPhotos(keys);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-checkbox-label" shrink>
        {props.name}
      </InputLabel>
      <Input
        type="file"
        onChange={uploadMultipleFiles}
        accept="image/*"
        inputProps={{ multiple: true }}
        disableUnderline={true}
      />
      <div>
        {images.map((url) => (
          <img
            src={url}
            alt="Not Available"
            key={url}
            className={classes.imageStyle}
          />
        ))}
      </div>
    </FormControl>
  );
}
