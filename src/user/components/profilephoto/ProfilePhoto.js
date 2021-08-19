import React, { useRef } from "react";
import useStyles from "./ProfilePhoto.styles";
import Avatar from "@material-ui/core/Avatar";
import { S3_BUCKET_URL } from "constant";

export default function CenteredGrid(props) {
  const classes = useStyles();

  const imageUrl = `${S3_BUCKET_URL}/profile-photos/profile_pic.jpg`;

  const imageRef = useRef();
  const handleClick = () => {
    imageRef.current.click();
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
      />
    </div>
  );
}
