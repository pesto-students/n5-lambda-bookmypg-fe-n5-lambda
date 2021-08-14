import React from "react";
import useStyles from "./Icon.styles";
import {
  Phone,
  AccountBox,
  Description,
  Event,
  Comment,
  Email,
} from "@material-ui/icons";

export default function TextFieldComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "Name":
      return <AccountBox className={classes.iconStyle} />;
    case "Email":
      return <Email className={classes.iconStyle} />;
    case "Phone":
      return <Phone className={classes.iconStyle} />;
    case "Description":
      return <Description className={classes.iconStyle} />;
    case "Event":
      return <Event className={classes.iconStyle} />;
    case "Comment":
      return <Comment className={classes.iconStyle} />;
    default:
      return <div></div>;
  }
}
