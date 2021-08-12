import React from "react";
import useStyles from "./Table.styles";
import { ReactComponent as SortingUpIcon } from "assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "assets/svg/sortingDown.svg";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Switch,
} from "@material-ui/core";

export default function TableComponent(props) {
  const classes = useStyles();
  const headers = Object.keys(props.tableData[0]);
  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead>
          <TableRow>
            {headers.map((header) =>
              header === props.sortingColumn ? (
                <TableCell align="center">
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                  <span className={classes.sorting}>
                    <span>
                      <SortingUpIcon className={classes.sortUp} />
                    </span>
                    <span>
                      <SortingDownIcon className={classes.sortDown} />
                    </span>
                  </span>
                </TableCell>
              ) : (
                <TableCell align="center">
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.map((emp, index) => (
            <TableRow key={index}>
              {headers.map((header) =>
                header === props.switchData ? (
                  <TableCell align="center">
                    {emp[header]}
                    <Switch
                      //checked={state.checkedA}
                      // onChange={handleChange}
                      name="checkedA"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </TableCell>
                ) : (
                  <TableCell align="center">{emp[header]}</TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
