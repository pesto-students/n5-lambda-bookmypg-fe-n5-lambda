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
import Tablecomponent from "components/table/Table";

const TableData = [
  {
    name: "abc",
    email: "abc@gmail.com",
    phone: "123",
    property: "abc",
    complaintdate: "12/07/2021",
    status: <Viewcomplaint />,
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
    <Tablecomponent
      switchData="name"
      sortingColumn="complaintdate"
      tableData={TableData}
    />
  );
}
