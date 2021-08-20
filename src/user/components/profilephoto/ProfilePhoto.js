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
    <>
      <Avatar
        src={imageUrl}
        onClick={handleClick}
        style={{ height: "192px", width: "192px" }}
        className={classes.avatarStyle}
      />
      <input
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
      />
    </>
  );
}
