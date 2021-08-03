import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AmenitiesData(props) {
  const classes = useStyles();

  return (
    <Grid id="top-row" container spacing={24}>
      {props.data.map((amenity) => (
        <div>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{amenity.name}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{amenity.logo}</Paper>
          </Grid>
        </div>
      ))}
    </Grid>
  );
}
