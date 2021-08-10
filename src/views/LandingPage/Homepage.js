import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/header/Header";
import Content from "./content";
import Footer from "../../components/footer/footer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

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

  return (
    <div className={classes.section}>
      <MuiThemeProvider theme={newtheme}>
        <Grid container alignItems="center">
          <Header title="Blog" sections={sections} />
          <Content />
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
