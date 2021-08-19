import React from "react";
import ReactDOM from "react-dom";
import TablePagination from "@material-ui/core/TablePagination";

export default function Paginationcomponent() {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10]}
      component="div"
      count="1"
      rowsPerPage="10"
      page="1"
    />
  );
}
