import React, { useState } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    paddingLeft: "0px",
  },
}));

const App = () => {
  const [visible, setVisible] = useState(false);
  const handleChange = () => {
    setVisible(true);
  };
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "auto",

          flexWrap: "wrap",
        }}
      >
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          style={{ display: "none" }}
          onChange={handleChange}
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
        <FormLabel
          component="legend"
          style={{
            paddingTop: "14px",
            paddingRight: "10px",
          }}
        >
          *Please upload an Image
        </FormLabel>
      </div>
      {/*<div>
        {visible ? (
          <FormLabel
            component="legend"
            style={{
              paddingTop: "14px",
              paddingRight: "10px",
              fontSize: "smaller",
            }}
          >
            Filename
          </FormLabel>
        ) : (
          ""
        )}
        </div>*/}
    </div>
  );
};

export default App;
