import React from "react";
import { Switch } from "@material-ui/core";

// action=="tenant"?do thing:do other
export default function SwitchComponent(props) {
  return (
    <Switch
      //checked={state.checkedA}
      //onChange={handleChange(action)}
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
}
