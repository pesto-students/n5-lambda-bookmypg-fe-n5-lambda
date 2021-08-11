import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Switch,
} from "@material-ui/core";
import { ReactComponent as SortingUpIcon } from "../../../assets/svg/sortingUp.svg";
import { ReactComponent as SortingDownIcon } from "../../../assets/svg/sortingDown.svg";
import Viewproperty from "./ViewProperty";
import useStyles from "./styles/OwnerTable.styles";
import { ORDER_BY } from "../../../constant";

export default function OwnerTable(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSwitch = (owner) => {
    if (owner.isactive) props.updateOwner(owner._id);
    props.setEnabled(true);
  };

  const owners = props.owners;

  const handleCellClick = (e) => {
    return props.order_by === ORDER_BY.DSC ? props.setOrderBy(ORDER_BY.ASC) : props.setOrderBy(ORDER_BY.DSC);
  }

  return (
    <Paper className={classes.paperStyle}>
      <Table className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">
              Registered Date
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
          {owners &&
            owners.length &&
            owners.map((owner) => (
              <TableRow>
                <TableCell align="center">
                  <div className={classes.switchcellStyle}>
                    {owner.firstName + " " + owner.lastName}
                    <Switch
                      checked={owner.isactive}
                      onChange={() => handleSwitch(owner)}
                      name="checkedA"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>
                </TableCell>
                <TableCell align="center">{owner.email}</TableCell>
                <TableCell align="center">{"+91 " + owner.phone}</TableCell>
                <TableCell align="center">{owner.createdAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
