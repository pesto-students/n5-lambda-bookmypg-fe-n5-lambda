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
} from "@material-ui/core";
import { getHeadersData, getComponent } from "./utility";
import { ORDER_BY } from "../../constant";

export default function TableComponent(props) {
  const classes = useStyles();
  const headersData = getHeadersData(props.list_type);
  const headers = Object.keys(headersData);

  const handleCellClick = (e) => {
    return props.order_by === ORDER_BY.DSC
      ? props.setOrderBy(ORDER_BY.ASC)
      : props.setOrderBy(ORDER_BY.DSC);
  };

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead>
          <TableRow>
            {Object.keys(headersData).map((header) =>
              header === props.sortingColumn ? (
                <TableCell align="center">
                  {headersData[header]}
                  <span className={classes.sorting}>
                    <span>
                      <SortingUpIcon
                        className={classes.sortUp}
                        onClick={handleCellClick}
                      />
                    </span>
                    <span>
                      <SortingDownIcon
                        className={classes.sortDown}
                        onClick={handleCellClick}
                      />
                    </span>
                  </span>
                </TableCell>
              ) : (
                <TableCell align="center">{headersData[header]}</TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.map((emp, index) => (
            <TableRow key={index}>
              {headers.map((header) =>
                //call a func expect component in return --> function takes case as param --> return equivalent component in table cell
                getComponent(emp, header, props.list_type)
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
