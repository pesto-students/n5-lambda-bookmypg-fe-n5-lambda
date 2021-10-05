import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../components/header/header";
import Footer from "components/footer/footer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PropertyContent from "../components/property/PropertyFilters";
import Theme from "theme/theme";

export default React.memo(function PropertyList() {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Grid container alignItems="center">
          <Header />
          <PropertyContent />
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
})
