import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "grey",
    overflowX: "auto",
    minWidth: "340px",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(propertyname, ownername, date, amount) {
  return { propertyname, ownername, date, amount };
}

const rows = [
  createData("Zolo house 1", "Rajath", "04-06-2021", 15000),
  createData("PG boys", "Raghu", "04-06-2021", 3700),
  createData("New PG", "Monali", "04-06-2021", 2400),
  createData("Old PG", "Vignesh", "04-06-2021", 670),
  createData("Here", "Hari", "04-06-2021", 4900),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table
        className={classes.table}
        align="center"
        aria-label="customized table"
        style={{ marginTop: "5em", marginBottom: "2em" }}
      >
        <TableHead style={{ backgroundColor: "grey" }}>
          <TableRow>
            <StyledTableCell>Property Name</StyledTableCell>
            <StyledTableCell align="right">PG-Owner Name</StyledTableCell>
            <StyledTableCell align="right">Payment Date</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.propertyname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ownername}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
