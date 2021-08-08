import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header";
import Content from "../components/home/Content";
import Footer from "../../components/footer/Footer";
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
