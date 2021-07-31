import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import Theme from "../theme/theme";

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

export default function WorkSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <MuiThemeProvider theme={Theme}>
        <Grid container alignItems="center">
          <Header />
          <Content />
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
