import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    //flexDirection: "column",
  },
}));
export default function SimpleRating(props) {
  const classes = new useStyles();
  return (
    <div>
      <Box
        borderColor="transparent"
        textAlign="center"
        display="flex"
        flexDirection="column"
        paddingLeft="10px"
      >
        <Rating
          name="read-only"
          value={props.value}
          fontSize="1.0rem"
          readOnly
        />
        <Typography variant="body2" color="secondary">
          {props.number} Reviews
        </Typography>
      </Box>
    </div>
  );
}
