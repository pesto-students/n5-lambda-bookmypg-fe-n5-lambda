import React from "react";
import Link from "@material-ui/core/Link";

export default function LinkComponent(props) {
  return (
    <Link onClick={props.handelClick} href={props.href}>
      {props.text}
    </Link>
  );
}
