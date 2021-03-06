import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function SimpleRating(props) {
  return (
    <div>{props.mobileView ? displayMobile(props) : displayWeb(props)}</div>
  );
}

const displayMobile = (props) => {
  return (
    <Box borderColor="transparent" textAlign="center" display="flex">
      <Rating name="read-only" value={props.value} readOnly />
      <Typography component="legend" color="primary">
        {props.number} Reviews
      </Typography>
    </Box>
  );
};

const displayWeb = (props) => {
  return (
    <Box
      borderColor="transparent"
      textAlign="center"
      display="flex"
      flexDirection="column"
    >
      <Rating name="read-only" value={props.value} readOnly />
      <Typography component="legend" color="primary">
        {props.number} Reviews
      </Typography>
    </Box>
  );
};
