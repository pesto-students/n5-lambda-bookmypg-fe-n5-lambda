import React from "react";
import useStyles from "./Typography.styles";
import Typography from "@material-ui/core/Typography";

export default function TypographyComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "FormTitle":
      return (
        <Typography component="h1" variant="h6" color="primary">
          {props.text}
        </Typography>
      );
    case "ListTitle":
      return (
        <Typography component="h1" variant="h5" color="primary">
          {props.text}
        </Typography>
      );
    case "SubTitleText":
      return (
        <Typography component="h1" variant="subtitle1" color="primary">
          {props.text}
        </Typography>
      );
    default:
      return (
        <Typography component="h1" variant="h6" color="primary">
          {props.text}
        </Typography>
      );
  }
}
