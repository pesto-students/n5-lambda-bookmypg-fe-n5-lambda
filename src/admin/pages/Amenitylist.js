import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "components/header/header";
import Content from "../components/amenity/AmenityListContent";
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
    label: "Owners",
    href: "/owner-list",
    icon: "People",
  },
  {
    label: "Amenities",
    href: "/amenity-list",
    icon: "Amenity",
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
    label: "Owners",
    href: "/owner-list",
    icon: "People",
  },
  {
    label: "Amenities",
    href: "/amenity-list",
    icon: "Amenity",
  },
];

export default React.memo(function AmenityList() {
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
