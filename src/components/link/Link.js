import React from "react";
import useStyles from "./Link.styles";
import Link from "@material-ui/core/Link";

export default function LinkComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "Large":
      return <Link />;
    default:
      return (
        <Link onClick={props.handelClick} href={props.href}>
          {props.text}
        </Link>
      );
  }
}
