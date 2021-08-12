import React from "react";
import useStyles from "./Formimage.styles";
import { S3_BUCKET_IMAGES_BASEURL } from "constant";

export default function FormImages(props) {
  const classes = useStyles();
  return (
    <div className={classes.alignStyle}>
      <img
        src={`${S3_BUCKET_IMAGES_BASEURL}/${props.imageName}`}
        alt={"Not available"}
        className={classes.imgStyle}
      />
    </div>
  );
}
