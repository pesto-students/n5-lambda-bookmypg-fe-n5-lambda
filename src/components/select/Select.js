import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl, FormHelperText } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import useStyles from "./Select.styles";

export default function SimpleSelect(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  switch (props.type) {
    case "LocationSearch":
      return (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="simple-select-label">{props.name}</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={props.value}
              onChange={props.onChange}
            >
              {props.listitems &&
                props.listitems.length &&
                props.listitems.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      );
    case "SelectValidation":
      return (
        <div>
          <FormControl className={classes.formControl} error={props.error}>
            <InputLabel id="simple-select-label">{props.name}</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={props.value}
              onChange={handleChange}
            >
              {props.listitems.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            {props.error && (
              <FormHelperText>{props.error.helperText}</FormHelperText>
            )}
          </FormControl>
        </div>
      );
    default:
      return (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="simple-select-label">{props.name}</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={props.value}
              onChange={handleChange}
            >
              {props.listitems.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
  }
}
