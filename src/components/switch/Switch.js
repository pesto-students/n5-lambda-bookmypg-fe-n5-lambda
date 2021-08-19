import React from "react";
import { Switch } from "@material-ui/core";

// action=="tenant"?do thing:do other
export default function SwitchComponent(props) {

  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <Switch
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
      checked={props.checked}
      onChange={handleChange}
    />
  );
}
