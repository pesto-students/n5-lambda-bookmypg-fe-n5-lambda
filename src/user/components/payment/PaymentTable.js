import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { ReactComponent as SortingUpIcon } from "../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../assets/svg/sortingDown.svg";
import useStyles from "./styles/PaymentTable.styles";

const Tabledata = [
  {
    property: "abc",
    owner: "xyz",
    transactionid: "123",
    amount: "15000",
    paymentdate: "12/07/2021",
  },
  {
    property: "abc",
    owner: "xyz",
    transactionid: "123",
    amount: "15000",
    paymentdate: "12/07/2021",
  },
  {
    property: "abc",
    owner: "xyz",
    transactionid: "123",
    amount: "15000",
    paymentdate: "12/07/2021",
  },
];

export default function PaymentTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paperStyle}>
      <Table className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Property Name</TableCell>
            <TableCell align="center">PG-Owner Name</TableCell>
            <TableCell align="center">
              Payment Date
              <span className={classes.sorting}>
                <span>
                  <SortingUpIcon className={classes.sortUp} />
                </span>
                <span>
                  <SortingDownIcon className={classes.sortDown} />
                </span>
              </span>
            </TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Transaction Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tabledata.map((payment) => (
            <TableRow>
              <TableCell align="center">{payment.property}</TableCell>
              <TableCell align="center">{payment.owner}</TableCell>
              <TableCell align="center">{payment.paymentdate}</TableCell>
              <TableCell align="center">{payment.amount}</TableCell>
              <TableCell align="center">{payment.transactionid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
