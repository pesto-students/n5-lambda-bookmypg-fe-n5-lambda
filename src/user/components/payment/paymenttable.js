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
import Theme from "../../theme/theme";
import { ReactComponent as SortingUpIcon } from "../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../assets/svg/sortingDown.svg";
import { makeStyles } from "@material-ui/core/styles";

const Tabledata = [
  {
    property: "abc",
    owner: "xyz",
    transactionid: "123",
    amount: "15000",
    paymentdate: "12/07/2021",
  },
  {
    property: "abc",
    owner: "xyz",
    transactionid: "123",
    amount: "15000",
    paymentdate: "12/07/2021",
  },
  {
    property: "abc",
    owner: "xyz",
    transactionid: "123",
    amount: "15000",
    paymentdate: "12/07/2021",
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

  const handleSwitch = (tenant) => {
    if (tenant.isactive) props.updateTenant(tenant._id);
    props.setEnabled(true);
  };

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Property Name</TableCell>
            <TableCell align="center">PG-Owner Name</TableCell>
            <TableCell align="center">
              Payment Date
              <span className={classes.sorting}>
                <span>
                  <SortingUpIcon className={classes.sortUp} />
                </span>
                <span>
                  <SortingDownIcon className={classes.sortDown} />
                </span>
              </span>
            </TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Transaction Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tabledata.map((payment) => (
            <TableRow>
              <TableCell align="center">
                <div
                  style={{
                    display: "flex",
                    marginLeft: "5px",
                    alignItems: "center",
                  }}
                >
                  {payment.property}
                  <Switch
                    //checked={tenant.isactive}
                    //onChange={() => handleSwitch(tenant)}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </TableCell>

              <TableCell align="center">{payment.owner}</TableCell>
              <TableCell align="center">{payment.paymentdate}</TableCell>
              <TableCell align="center">{payment.amount}</TableCell>
              <TableCell align="center">{payment.transactionid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
