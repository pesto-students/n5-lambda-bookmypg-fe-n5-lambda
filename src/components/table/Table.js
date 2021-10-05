import React from "react";
import useStyles from "./Table.styles";
import Loader from "../../components/loader/Loader";
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
    <Paper variant="outlined" square className={classes.paperStyle}>
      <Table style={{ minWidth: "340px" }} stickyHeader>
        <TableHead className={classes.tablecellStyle}>
          <TableRow>
            {Object.keys(headersData).map((header) =>
              header === props.sortingColumn ? (
                <TableCell align="center" className={classes.tablecellStyle}>
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
              ) : header === "isactive" ? (
                <TableCell align="center" className={classes.tablecellStyle}>
                  Status
                </TableCell>
              ) : (
                <TableCell align="center" className={classes.tablecellStyle}>
                  {headersData[header]}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.map((emp, index) => (
            <TableRow key={index} hover>
              {headers.map((header) =>
                //call a func expect component in return --> function takes case as param --> return equivalent component in table cell
                getComponent(
                  emp,
                  header,
                  props.list_type,
                  props.refresh,
                  props.setRefresh,
                  props.updateDocument,
                  props.user
                )
              )}
            </TableRow>
          ))}
        </TableBody>
        {props.requestState && props.requestState.requestProcessing && <Loader align="5vh 55vh"/>}
      </Table>
    </Paper>
  );
}
