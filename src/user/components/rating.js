import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function SimpleRating(props) {
  return (
    <div>
      <Box borderColor="transparent" textAlign="center" display="flex">
        <Rating name="read-only" value={props.value} readOnly />
        <Typography component="legend" color="secondary">
          {props.number} Reviews
        </Typography>
      </Box>
    </div>
  );
}
