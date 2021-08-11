import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import Viewcomplaint from "./ViewComplaint";
import { ReactComponent as SortingUpIcon } from "../../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../../assets/svg/sortingDown.svg";
import useStyles from "./styles/ComplaintTable.styles";

const Tabledata = [
  {
    name: "abc",
    email: "abc@gmail.com",
    phone: "123",
    property: "abc",
    complaintdate: "12/07/2021",
    status: "Pending",
  },
  {
    name: "def",
    email: "abc@gmail.com",
    phone: "123",
    property: "abc",
    complaintdate: "12/07/2021",
    status: "Pending",
  },
  {
    name: "pqr",
    email: "abc@gmail.com",
    phone: "123",
    property: "abc",
    complaintdate: "12/07/2021",
    status: "Pending",
  },
];

export default function Tablecomponent(props) {
  const classes = useStyles();

  const complaints = props.complaints;

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Property</TableCell>
            <TableCell align="center">Tenant Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">
              Complaint Date
              <span className={classes.sorting}>
                <span>
                  <SortingUpIcon className={classes.sortUp} />
                </span>
                <span>
                  <SortingDownIcon className={classes.sortDown} />
                </span>
              </span>
            </TableCell>
            <TableCell align="center">Complaint</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {complaints &&
            complaints.length &&
            complaints.map((complaint) => (
              <TableRow>
                <TableCell align="center">{complaint.property.name}</TableCell>
                <TableCell align="center">
                  {complaint.raisedby.firstName +
                    " " +
                    complaint.raisedby.lastName}
                </TableCell>
                <TableCell align="center">{complaint.raisedby.email}</TableCell>
                <TableCell align="center">{complaint.raisedby.phone}</TableCell>
                <TableCell align="center">{complaint.createdAt}</TableCell>
                <TableCell align="center">
                  <div className={classes.viewlinkStyle}>
                    <Viewcomplaint />
                  </div>
                </TableCell>
                <TableCell align="center">{complaint.status}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
