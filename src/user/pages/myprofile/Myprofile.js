import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../../components/header/header";
import Content from "../../components/profile/MyProfileContent";
import Footer from "components/footer/footer";
import Theme from "theme/theme";

const responsivedrawerData = [
  {
    label: "Basic Details",
    href: "/myprofile",
    icon: "Profile",
  },
  {
    label: "My Properties",
    href: "/mypropertydetails",
    icon: "Property",
  },
  {
    label: "Payment History",
    href: "/payment-list",
    icon: "Payment",
  },
];

export default function MyProfile() {
  const [loggedUser, setLoggedUser] = React.useState("");

  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        <Content responsivedrawerData={responsivedrawerData} />
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
