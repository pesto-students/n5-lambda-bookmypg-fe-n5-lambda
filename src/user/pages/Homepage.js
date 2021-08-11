import React from "react";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "user/components/header/header";
import Content from "user/components/home/Content";
import Footer from "../components/footer/footer";
import Theme from "user/theme/theme";
const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];

const locationItems = [
  {
    id: "0",
    name: "None",
  },
  {
    id: "1",
    name: "Delhi",
  },
  {
    id: "2",
    name: "Mumbai",
  },
  {
    id: "3",
    name: "Chennai",
  },
];

export default function HomePage() {
  const [loggedUser, setLoggedUser] = React.useState("");

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Grid container alignItems="center">
          <Header
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
            headersData={headersData}
            locationItems={locationItems}
          />
          <Content />
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
