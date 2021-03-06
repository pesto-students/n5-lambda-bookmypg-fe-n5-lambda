import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "components/header/header";
import Content from "../components/home/content";
import Footer from "../../components/footer/footer";
import Theme from "theme/theme";
import Grid from "@material-ui/core/Grid";

const headersData = [
  {
    label: "About us",
    href: "/about",
  },
];

const responsiveHeaderData = [
  {
    label: "Home",
    href: "/home",
    icon: "Home",
  },
  {
    label: "My Properties",
    href: "/myproperties",
    icon: "Property",
  },
  {
    label: "Tenants",
    href: "/tenants-list",
    icon: "People",
  },
  {
    label: "Complaints",
    href: "/complaints",
    icon: "Comment",
  },
  {
    label: "About us",
    href: "/about",
    icon: "About",
  },
];

const listitems = [
  {
    label: "My Profile",
    href: "/MyProfile",
  },
  {
    label: "Logout",
    href: "/",
  },
];

const responsivedrawerData = [
  {
    label: "My Properties",
    href: "/owner-property-list",
    icon: "Property",
  },
  {
    label: "Tenants",
    href: "/tenant-list",
    icon: "People",
  },
  {
    label: "Complaints",
    href: "/owner-complaint-list",
    icon: "Comment",
  },
];

export default React.memo(function HomePage() {
  const [loggedUser, setLoggedUser] = React.useState("");

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Header
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
          headersData={headersData}
          responsiveHeaderData={responsiveHeaderData}
          listitems={listitems}
        />
        <Content responsivedrawerData={responsivedrawerData} />
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
            {/* <VerticalBar title={"Complaints"} /> */}
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
            {/* <PieChart title={"Occupancy"} /> */}
          </Grid>
        </Grid>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
})
