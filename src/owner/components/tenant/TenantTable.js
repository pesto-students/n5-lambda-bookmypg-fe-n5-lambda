import React from "react";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Ratetenant from "./RateTenant";
import { ReactComponent as SortingUpIcon } from "../../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../../assets/svg/sortingDown.svg";
import useStyles from "./styles/TenantTable.styles";
import { ORDER_BY } from "../../../constant";

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
  const classes = useStyles();

  const tenants = props.tenants;

  const handleSwitch = (tenant) => {
    if (tenant.isactive) props.updateTenant(tenant._id);
    props.setEnabled(true);
  };

  const handleCellClick = (e) => {
    return props.order_by === ORDER_BY.DSC
      ? props.setOrderBy(ORDER_BY.ASC)
      : props.setOrderBy(ORDER_BY.DSC);
  };

  return (
    <Paper className={classes.paperStyle}>
      <Table className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Property</TableCell>
            <TableCell align="center">
              Onboard Date
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
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants &&
            tenants.length &&
            tenants.map((tenant) => (
              <TableRow>
                <TableCell align="center">
                  <div className={classes.switchcellStyle}>
                    <Ratetenant
                      value={tenant.firstName + " " + tenant.lastName}
                    />
                    <Switch
                      checked={tenant.isactive}
                      onChange={() => handleSwitch(tenant)}
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
