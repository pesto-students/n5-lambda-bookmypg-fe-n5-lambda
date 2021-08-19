import React from "react";
import useStyles from "./Formimage.styles";
import { S3_BUCKET_IMAGES_BASEURL } from "constant";

export default function FormImages(props) {
  const classes = useStyles();
  switch (props.type) {
    case "logo":
      return (
        <div className={classes.alignStyle}>
          <img
            src={props.imageName}
            alt={"Not available"}
            className={classes.logoimgStyle}
          />
        </div>
      );
    case "icon":
      return (
        <div className={classes.alignStyle}>
          <img
            src={`${S3_BUCKET_IMAGES_BASEURL}/${props.imageName}`}
            alt={"Not available"}
            className={classes.iconStyle}
          />
        </div>
      );
    case "loginpageLogo":
      return (
        <div className={classes.alignStyle}>
          <img
            src={`${S3_BUCKET_IMAGES_BASEURL}/${props.imageName}`}
            alt={"Not available"}
            className={classes.loginpageStyle}
          />
        </div>
      );
    default:
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
}
