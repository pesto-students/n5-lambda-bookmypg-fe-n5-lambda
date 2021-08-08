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
import { ReactComponent as SortingUpIcon } from "../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../assets/svg/sortingDown.svg";
import { makeStyles } from "@material-ui/core/styles";
import Viewproperty from "../components/viewproperties";
import Addamenity from "../components/addamenity";

const Tabledata = [
  {
    name: "Washing Machine",
    logo: "images/Hostel images/washing-machine.png",
    createdAt: "12/07/2021",
  },
  {
    name: "Washing Machine",
    logo: "images/Hostel images/washing-machine.png",
    createdAt: "12/07/2021",
  },
  {
    name: "Washing Machine",
    logo: "images/Hostel images/washing-machine.png",
    createdAt: "12/07/2021",
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
  amenityStyle: {
    display: "flex",
  },
}));

export default function Tablecomponent(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const rateTenantPopup = () => {
    //<Ratetenant />;
  };

  const properties = props.properties;

  return (
    <Paper style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "340px" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Logo</TableCell>
            <TableCell align="center">
              Registered Date
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
          {Tabledata.map((amenity) => (
            <TableRow>
              <TableCell align="center">
                <div className={classes.amenityStyle}>
                  <Addamenity mode="Edit" value={amenity.name} />
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </TableCell>
              <TableCell align="center">
                <img
                  src={amenity.logo}
                  style={{ width: "30px" }}
                  alt="No Preview available"
                />
              </TableCell>
              <TableCell align="center">{amenity.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
