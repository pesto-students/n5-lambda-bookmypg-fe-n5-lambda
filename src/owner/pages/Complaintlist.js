import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "components/header/header";
import Content from "../components/complaint/ComplaintListContent";
import Footer from "../../components/footer/footer";
import Theme from "theme/theme";

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

export default React.memo(function ComplaintList() {
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
        <Footer />
      </MuiThemeProvider>
    </div>
  );
})
