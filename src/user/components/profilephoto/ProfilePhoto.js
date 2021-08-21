import React, { useRef } from "react";
import useStyles from "./ProfilePhoto.styles";
import Avatar from "@material-ui/core/Avatar";
import { uploadImage } from "../../../aws";
import { S3_BUCKET_URL } from "constant";

export default function CenteredGrid(props) {
  const classes = useStyles();
  const imageUrl = `${S3_BUCKET_URL}/${props.image}`;

  const imageRef = useRef();
  const handleClick = () => {
    imageRef.current.click();
  };

  const handleChange = async (e) => {
    const dirName = "profile-photos/";
    if (e.target.files) {
      const response = await uploadImage(e.target.files[0], dirName);
      props.setImage(response);
      props.handleSubmit(response);
    } else {
      props.setImage([]);
    }
  };

  return (
    <>
      <Avatar
        src={props.image?imageUrl:props.defaultImage}
        onClick={handleClick}
        style={{ height: "192px", width: "192px" }}
        className={classes.avatarStyle}
      />
      <input
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleChange}
      />
    </>
  );
}
