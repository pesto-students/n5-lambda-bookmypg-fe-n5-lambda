import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Userheader from "./Userheader";
import Footer from "../LandingPage/footer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PaymentTable from "./Paymenttable";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ChevronRight from "@material-ui/icons/ChevronRight";
import TextField from "@material-ui/core/TextField";
import { createTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import Searchbar from "./Searchbar";
import Datepicker from "./Datepicker";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];
const useStylesselect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  contentStyle: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingTop: "100px",
  },
  contentButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Userpaymenthistory() {
  const newtheme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#212121",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#616161",
        dark: "#ba000d",
        contrastText: "#fff",
      },
    },
  });
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiThemeProvider theme={newtheme}>
      <Grid container alignItems="center">
        <Userheader title="Blog" sections={sections} />
        <Grid container justify={"space-between"}>
          <Grid
            item
            xs={12}
            md={4}
            style={{
              padding: "18px",
              paddingLeft: "0px",
              marginTop: "5em",
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
              marginTop: "5em",
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
          <PaymentTable />
          <Footer />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}
