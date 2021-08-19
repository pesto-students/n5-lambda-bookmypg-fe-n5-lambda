import React from "react";
import useStyles from "./Textfield.styles";
import TextField from "@material-ui/core/TextField";
import Icon from "components/icon/Icon";

export default function TextFieldComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "standardForm":
      return (
        <TextField
          id="standard-basic"
          label={props.label}
          defaultValue={props.defaultvalue}
          className={classes.widthStyle}
          rows={props.rows}
          multiline={props.multiline}
          maxRows={props.maxrows}
          value={props.value}
          disabled={props.disabled}
          onChange={props.onChange}
          InputProps={{
            endAdornment: <Icon type={props.icon} />,
          }}
        />
      );

    default:
      return (
        <TextField
          disabled
          id="standard-disabled"
          label={props.label}
          defaultValue={props.defaultvalue}
          fullwidth
          className={classes.disabledStyle}
          InputProps={{
            classes: {
              root: classes.root,
              disabled: classes.disabled,
            },
            endAdornment: <Icon type={props.icon} />,
          }}
          rows={props.rows}
          multiline={props.multiline}
          maxRows={props.maxrows}
        />
      );
  }
}
