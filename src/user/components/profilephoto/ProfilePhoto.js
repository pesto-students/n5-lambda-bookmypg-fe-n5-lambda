import React, { useEffect, useRef, useState } from "react";
import useStyles from "./ProfilePhoto.styles";
import Avatar from "@material-ui/core/Avatar";
import { S3_BUCKET_IMAGES_BASEURL, S3_BUCKET_URL } from "constant";

export default function CenteredGrid(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(
    `${S3_BUCKET_IMAGES_BASEURL}/${props.imageName}`
  );
  const imageUrl = `${S3_BUCKET_URL}/profile-photos/profile_pic.jpg`;

  const imageRef = useRef();
  const handleClick = () => {
    imageRef.current.click();
  };

  // On each change let user have access to a selected file
  const handleChange = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    setState(file);
  };

  return (
    <div>
      <Avatar
        src={imageUrl}
        onClick={handleClick}
        className={classes.largeStyle}
      />
      <input
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
