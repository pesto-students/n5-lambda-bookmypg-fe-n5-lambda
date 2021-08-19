import React from "react";
import Typography from "@material-ui/core/Typography";
import theme from "theme/theme";
import useStyles from "./Typography.styles";

export default function TypographyComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "FormTitle":
      return (
        <Typography
          component="h1"
          variant="h6"
          align={props.align ? props.align : "left"}
          //color="primary"
        >
          {props.text}
        </Typography>
      );
    case "ListTitle":
      return (
        <Typography component="h1" variant="h5">
          {props.text}
        </Typography>
      );
    case "SubTitleText":
      return (
        <Typography component="h1" variant="subtitle1">
          {props.text}
        </Typography>
      );
    case "BodyText":
      return <Typography variant="body2">{props.text}</Typography>;
    case "Body":
      return <Typography variant="body1">{props.text}</Typography>;
    case "BodyTextwithpadding":
      return (
        <Typography variant="body2" className={classes.bodytextpaddingStyle}>
          {props.text}
        </Typography>
      );
    case "Bodywithpadding":
      return (
        <Typography variant="body1" className={classes.bodypaddingStyle}>
          {props.text}
        </Typography>
      );

    case "Caption":
      return (
        <Typography
          component="h1"
          variant="h6"
          align={props.align ? props.align : "left"}
        >
          {props.text}

          <Typography variant="caption">{props.captiontext}</Typography>
        </Typography>
      );
    case "CaptionText":
      return (
        <>
          <Typography
            variant="body1"
            align={props.align ? props.align : "left"}
          >
            {props.text}
          </Typography>
          <Typography component="h1" variant="caption">
            {props.captiontext}
          </Typography>
        </>
      );
    default:
      return (
        <Typography component="h1" variant="h6">
          {props.text}
        </Typography>
      );
  }
}
