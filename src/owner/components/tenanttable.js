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
    email: "abc@gmail.com",
    phone: "123",
    property: "abc",
    moveindate: "12/07/2021",
  },
  {
    name: "def",
    email: "abc@gmail.com",
    phone: "123",
    property: "abc",
    moveindate: "12/07/2021",
  },
  {
    name: "pqr",
    email: "abc@gmail.com",
    phone: "123",
    property: "abc",
    moveindate: "12/07/2021",
  },
];

export default function Tablecomponent(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const tenants = props.tenants;

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
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Property</TableCell>
            <TableCell align="center">Onboard Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants &&
            tenants.length &&
            tenants.map((tenant) => (
              <TableRow>
                <TableCell align="center">
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "5px",
                      alignItems: "center",
                    }}
                  >
                    <Ratetenant
                      value={tenant.firstName + " " + tenant.lastName}
                    />
                    <Switch
                      checked={tenant.isactive}
                      onChange={() =>
                        tenant.isactive && props.updateTenant(tenant._id)
                      }
                      name="checkedA"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>
                </TableCell>
                <TableCell align="center">{tenant.email}</TableCell>
                <TableCell align="center">{"+91 " + tenant.phone}</TableCell>
                <TableCell align="center">{tenant.property.name}</TableCell>
                <TableCell align="center">{tenant.onboardedAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
