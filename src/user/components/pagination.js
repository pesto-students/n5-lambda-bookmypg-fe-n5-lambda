import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      justifyContent: "center",
      display: "flex",
    },
  },
}));

export default function PaginationControlled(props) {
  const classes = useStyles();
  const handleChange = (event, value) => {
    props.setPagenumber(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={10} page={props.pagenumber} onChange={handleChange} />
    </div>
  );
}
