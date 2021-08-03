import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Grid from "@material-ui/core/Grid";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
//import GridItem from "@material-ui/core/GridItem";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "@material-ui/core/Button";
import CustomInput from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { createTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Propertycontent from "../LandingPage/Propertycontent";

//import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

//const useStyles = makeStyles(styles);
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

const data = [
  {
    id: 1,
    name: "abc",
    rating: 4,
  },
  {
    id: 2,
    name: "abc",
    rating: 4,
  },
  {
    id: 3,
    name: "abc",
    rating: 4,
  },
  {
    id: 4,
    name: "abc",
    rating: 4,
  },
  {
    id: 5,
    name: "abc",
    rating: 4,
  },
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

const useStylesgrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    textAlign: "-webkit-center",
  },

  paper: {
    height: 140,
    width: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const useStyles = makeStyles({
  section: {
    //padding: "70px 0",
  },
  title: {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  spacin: {
    marginRight: "50px",
    marginLeft: "25px",
    marginTop: "15px",
    marginBottom: "15px",
    padding: "20px 0px",
  },
  spacinlocation: {
    marginRight: "50px",
    marginLeft: "25px",
    marginTop: "15px",
    marginBottom: "15px",
  },
});

const useStylesnew = makeStyles({
  root: {
    minWidth: 250,
    width: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WorkSection() {
  const classes = useStyles();
  const classesgrid = useStylesgrid();
  const classesselect = useStylesselect();
  const classes1 = useStylesnew();
  const [location, setLocation] = React.useState("");
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

  return (
    <div className={classes.section}>
      <MuiThemeProvider theme={newtheme}>
        <Grid container alignItems="center">
          <Header title="Blog" sections={sections} />
          <Propertycontent />
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
