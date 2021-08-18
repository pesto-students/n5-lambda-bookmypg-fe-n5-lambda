import React from "react";
import BorderLinearProgress from "./Progressbar.styles";

export default function ReviewBars(props) {
  return <BorderLinearProgress variant="determinate" value={props.value} />;
}
