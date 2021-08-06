import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import ArrowDropUpIcon from "@material-ui/icons/ArrowUpward";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDownward";
import Theme from "../theme/theme";
import Viewcomplaint from "../components/viewcomplaint";

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

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead
          style={{
            backgroundColor: Theme.palette.secondary.main,
          }}
        >
          <TableRow>
            <TableCell>Tenant Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Property</TableCell>
            <TableCell>
              Complaint Date
              <div style={{ display: "inline-grid", marginLeft: "5px" }}>
                <ArrowDropUpIcon style={{ transform: "scale(0.7)" }} />
                <ArrowDropDownIcon style={{ transform: "scale(0.7)" }} />
              </div>
            </TableCell>
            <TableCell>Complaint</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tabledata.map((data) => (
            <TableRow>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.property}</TableCell>
              <TableCell>{data.complaintdate}</TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "5px",
                    alignItems: "center",
                  }}
                >
                  <Viewcomplaint />
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </TableCell>
              <TableCell>{data.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
