import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { ReactComponent as SortingUpIcon } from "../../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../../assets/svg/sortingDown.svg";
import useStyles from "./styles/PropertyTable.styles";

const Tabledata = [
  {
    name: "abc",
    location: "Mumbai",
    address: "Sion",
    pincode: "12345",
    freebeds: "10",
    created: "12/07/2021",
  },
  {
    name: "def",
    location: "Delhi",
    address: "123",
    pincode: "abc",
    freebeds: "abc",
    created: "12/07/2021",
  },
  {
    name: "pqr",
    location: "Chennai",
    address: "123",
    pincode: "abc",
    freebeds: "abc",
    created: "12/07/2021",
  },
];

export default function Tablecomponent(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const classes = useStyles();
  const properties = props.properties;

  return (
    <Paper className={classes.paperStyle}>
      <Table className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Free Beds</TableCell>
            <TableCell align="center">
              Registered Date
              <span className={classes.sorting}>
                <span>
                  <SortingUpIcon className={classes.sortUp} />
                </span>
                <span>
                  <SortingDownIcon className={classes.sortDown} />
                </span>
              </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties &&
            properties.length &&
            properties.map((property) => (
              <TableRow>
                <TableCell align="center">{property.name}</TableCell>
                <TableCell align="center">{property.location.name}</TableCell>
                <TableCell align="center">{property.address}</TableCell>
                <TableCell align="center">{property.totalbeds}</TableCell>
                <TableCell align="center">{property.createdAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
