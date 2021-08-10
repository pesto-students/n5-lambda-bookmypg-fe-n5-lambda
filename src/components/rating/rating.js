import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function RatingComponent(props) {
  switch (props.type) {
    case "Large":
      return (
        <Rating size="large" readOnly={props.readonly} value={props.value} />
      );
    case "Small":
      return <Rating size="small" readOnly={props.readonly} />;
    default:
      return <Rating readOnly={props.readonly} />;
  }
}
