import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header/header";
import Content from "../components/home/Content";
import Footer from "../../components/footer/footer";
import Theme from "../theme/theme";
import OverticalBar from "../Ocharts/OverticalBar";
import OpieChart from "../Ocharts/Opiechart";
import Grid from "@material-ui/core/Grid";

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
            <OverticalBar />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              marginLeft: "20em",
              textAlign: "center",
            }}
          >
            <OpieChart />
          </Grid>
        </Grid>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
