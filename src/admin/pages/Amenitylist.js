import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header";
import Content from "../components/amenitylistcontent";
import Footer from "../components/footer";
import Theme from "../theme/theme";

export default function HomePage() {
  const [loggedUser, setLoggedUser] = React.useState("");

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        <Content />

        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
