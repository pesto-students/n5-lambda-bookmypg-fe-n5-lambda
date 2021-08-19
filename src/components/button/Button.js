import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./Button.styles";

export default function ButtonComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "Menubutton":
      return (
        <Button
          color={props.color ? props.color : "inherit"}
          key={props.text}
          onClick={props.handleClick}
          className={classes.menuButton}
          component={props.component}
          to={props.to}
        >
          {props.text}
        </Button>
      );
    case "Paybutton":
      return (
        <Button
          variant="contained"
          color="secondary"
          key={props.text}
          onClick={props.handleClick}
          className={classes.payButton}
          disabled={props.disabled}
        >
          {props.text}
        </Button>
      );

    default:
      return (
        <Button
          variant="contained"
          color={props.color ? props.color : "secondary"}
          key={props.text}
          onClick={props.handleClick}
          className={classes.buttonStyle}
        >
          {props.text}
        </Button>
      );
  }
}
