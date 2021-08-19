import React from "react";
import TablePagination from "@material-ui/core/TablePagination";

export default function Paginationcomponent(props) {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10]}
      component="div"
      count={props.count}
      rowsPerPage={props.countperpage}
      page={props.pagenumber}
      onPageChange={(event, value) => props.setPagenumber(value)}
      onRowsPerPageChange={(event) => props.setCountperpage(event.target.value)}
    />
  );
}
