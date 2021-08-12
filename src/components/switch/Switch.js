import React from "react";
import { Switch } from "@material-ui/core";

export default function Switch(props) {
  return (
    <Switch
      //checked={state.checkedA}
      onChange={props.handleChange}
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
}
