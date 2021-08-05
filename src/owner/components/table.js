import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import ResponsiveDrawer from "./responsivedrawer";
import Grid from "@material-ui/core/Grid/Grid";
import Link from "@material-ui/core/Link";
import TablePagination from "@material-ui/core/TablePagination";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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

export default function Tablefile() {
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
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid
            item
            xs={12}
            md={10}
            style={{ padding: "8px", textAlign: "center" }}
          >
            <Typography component="h1" variant="h5">
              Tenants List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  padding: "18px",
                  paddingLeft: "0px",
                  textAlign: "center",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Search by name"
                  style={{ width: "300px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  padding: "8px",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="From Date:"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    disablePast={true}
                  />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="To Date:"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    disablePast={true}
                    style={{ marginLeft: "10px" }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>

            <Paper style={{ overflowX: "auto" }}>
              <Table style={{ minWidth: "340px" }}>
                <TableHead style={{ backgroundColor: "grey" }}>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Property</TableCell>
                    <TableCell>Move-in Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Tabledata.map((data) => (
                    <TableRow>
                      <TableCell>
                        <Link href="#" onClick={preventDefault}>
                          {data.name}
                        </Link>
                        <Switch
                          checked={state.checkedA}
                          onChange={handleChange}
                          name="checkedA"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </TableCell>
                      <TableCell>{data.email}</TableCell>
                      <TableCell>{data.phone}</TableCell>
                      <TableCell>{data.property}</TableCell>
                      <TableCell>{data.moveindate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count="1"
            rowsPerPage="10"
            page="1"
          />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}
