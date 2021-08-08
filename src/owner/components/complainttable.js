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
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as SortingUpIcon } from "../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../assets/svg/sortingDown.svg";

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

  const complaints = props.complaints;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Tenant Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Property</TableCell>
            <TableCell align="center">
              Complaint Date
              <span className={classes.sorting}>
                <span>
                  <SortingUpIcon className={classes.sortUp} />
                </span>
                <span>
                  <SortingDownIcon className={classes.sortDown} />
                </span>
              </span>
            </TableCell>
            <TableCell align="center">Complaint</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {complaints &&
            complaints.length &&
            complaints.map((complaint) => (
              <TableRow>
                <TableCell align="center">
                  {complaint.raisedby.firstName +
                    " " +
                    complaint.raisedby.lastName}
                </TableCell>
                <TableCell align="center">{complaint.raisedby.email}</TableCell>
                <TableCell align="center">{complaint.raisedby.phone}</TableCell>
                <TableCell align="center">{complaint.property.name}</TableCell>
                <TableCell align="center">{complaint.createdAt}</TableCell>
                <TableCell align="center">
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "5px",
                      alignItems: "center",
                    }}
                  >
                    <Viewcomplaint />
                    {/* <Switch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    /> */}
                  </div>
                </TableCell>
                <TableCell align="center">{complaint.status}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
