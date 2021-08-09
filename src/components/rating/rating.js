import React from "react";
import useStyles from "./rating.styles";
import Rating from "@material-ui/lab/Rating";

export default function RatingComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "Large":
      return <Rating size="large" />;
    case "SubTitleText":
      return <Rating size="large" />;
    default:
      return <Rating size="large" />;
  }
}
