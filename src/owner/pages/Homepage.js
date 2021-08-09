import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header/header";
import Content from "../components/home/content";
import VerticalBar from "../Charts/VerticalBar";
import Footer from "../../components/footer/footer";
import Theme from "../theme/theme";
import Grid from "@material-ui/core/Grid";
import PieChart from "../Charts/Piechart";

export default function HomePage() {
  const [loggedUser, setLoggedUser] = React.useState("");

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        <Content />
        <Grid container justify={"space-between"}>
          <Grid
            item
            xs={12}
            md={4}
            style={{
              marginLeft: "20em",
              textAlign: "center",
            }}
          >
            <VerticalBar />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{
              marginLeft: "20em",
              textAlign: "center",
              marginBottom: "20em",
            }}
          >
            <PieChart />
          </Grid>
        </Grid>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
