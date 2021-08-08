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
import { ReactComponent as SortingUpIcon } from "../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../assets/svg/sortingDown.svg";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  sortIcons: {
    width: "8px",
    height: "8px",

    verticalAlign: "top",
  },
  sorting: {
    display: "inline-block",
    marginLeft: "8px",
    height: "15px",
    width: "20px",
    position: "relative",
    verticalAlign: "middle",
  },
  sortUp: {
    top: "-1px",
    width: "8px",
    height: "8px",
    cursor: "pointer",
    position: "absolute",
  },
  sortDown: {
    bottom: "-1px",
    width: "8px",
    height: "8px",
    cursor: "pointer",
    position: "absolute",
  },
}));
export default function Tablecomponent(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const tenants = props.tenants;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const rateTenantPopup = () => {
    <Ratetenant />;
  };

  const handleSwitch = (tenant) => {
    if (tenant.isactive) props.updateTenant(tenant._id);
    props.setEnabled(true);
  };

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
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
                  <SortingUpIcon className={classes.sortUp} />
                </span>
                <span>
                  <SortingDownIcon className={classes.sortDown} />
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
