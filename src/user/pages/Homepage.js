import React from "react";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "user/components/header/header";
import Content from "user/components/home/Content";
import Footer from "components/footer/footer";
import Theme from "theme/theme";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about",
  },
];

export default React.memo(function HomePage() {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Grid container alignItems="center">
          <Header headersData={headersData} isUser={false} />
          <Content />
          <Footer type="center" />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
})
