import React from "react";
import { Switch } from "@material-ui/core";

// action=="tenant"?do thing:do other
export default function SwitchComponent(props) {

  const [checked, setChecked] = React.useState(props.status || "");

  const handleChange = () => {
    console.log("inside")
    setChecked(!checked);
    props.updateDocument({id: props.id, user:props.user});
    setTimeout(() => {
      props.setRefresh(!props.refresh);
    }, 500);
  }

  return (
    <Switch
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
      checked={checked}
      onChange={handleChange}
    />
  );
}
