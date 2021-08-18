import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "components/header/header";
import Content from "../components/amenity/AmenityListContent";
import Footer from "../../components/footer/footer";
import Theme from "../theme/theme";
const headersData = [
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];

const responsiveHeaderData = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Owners",
    href: "/owner-list",
  },
  {
    label: "Amenities",
    href: "/amenity-list",
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

export default function AmenityList() {
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
        <Content />
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
