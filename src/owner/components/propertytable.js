import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Switch from "@material-ui/core/Switch";
import ArrowDropUpIcon from "@material-ui/icons/ArrowUpward";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDownward";
import Theme from "../theme/theme";
import Ratetenant from "../components/ratetenant";

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

export default function Tablecomponent() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const rateTenantPopup = () => {
    <Ratetenant />;
  };

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead
          style={{
            backgroundColor: Theme.palette.secondary.main,
          }}
        >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell>Free Beds</TableCell>
            <TableCell>
              Registered Date
              <div style={{ display: "inline-grid", marginLeft: "5px" }}>
                <ArrowDropUpIcon style={{ transform: "scale(0.7)" }} />
                <ArrowDropDownIcon style={{ transform: "scale(0.7)" }} />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tabledata.map((data) => (
            <TableRow>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.address}</TableCell>
              <TableCell>{data.pincode}</TableCell>
              <TableCell>{data.freebeds}</TableCell>
              <TableCell>{data.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
