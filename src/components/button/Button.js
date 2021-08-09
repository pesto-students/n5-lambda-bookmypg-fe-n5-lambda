import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./Button.styles";

export default function ButtonComponent(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={props.handleClick}
      className={classes.buttonStyle}
    >
      {props.text}
    </Button>
  );
}
