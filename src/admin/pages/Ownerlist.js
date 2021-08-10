import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header/header";
import Content from "../components/owner/OwnerListConent";
import Footer from "../../components/footer/footer";
import Theme from "../theme/theme";

export default function HomePage() {

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Header/>
        <Content />

        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
