import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function ButtonComponent(props) {
  return (
    <IconButton onClick={props.handleClick}>
      <CloseIcon />
    </IconButton>
  );
}
