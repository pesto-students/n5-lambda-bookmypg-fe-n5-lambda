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
import Addamenity from "./AddAmenity";
import useStyles from "./styles/AmenityTable.styles";
import { S3_BUCKET_URL } from "../../../constant";
import { ORDER_BY } from "../../../constant";

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

export default function AmenityTable(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleCellClick = (e) => {
    return props.order_by === ORDER_BY.DSC
      ? props.setOrderBy(ORDER_BY.ASC)
      : props.setOrderBy(ORDER_BY.DSC);
  };
    
  const amenities = props.amenities;

  return (
    <Paper className={classes.paperStyle}>
      <Table className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Logo</TableCell>
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
          {amenities &&
            amenities.length &&
            amenities.map((amenity) => (
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
                    src={`${S3_BUCKET_URL}/${amenity.logo}`}
                    alt="No Preview available"
                    className={classes.imgStyle}
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
