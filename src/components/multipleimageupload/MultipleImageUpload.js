import React, { useState } from "react";
import useStyles from "./MultipleImageUpload.styles";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

export default function App(props) {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const uploadMultipleFiles = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      setImages((oldArray) => [
        ...oldArray,
        URL.createObjectURL(e.target.files[i]),
      ]);
    }
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
