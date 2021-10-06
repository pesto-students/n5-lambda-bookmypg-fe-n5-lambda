import React from "react";
import useStyles from "./Icon.styles";
import {
  Phone,
  AccountBox,
  Description,
  Event,
  Comment,
  Email,
  Search,
  Home,
  PeopleAlt,
  PlusOne,
  Apartment,
  TrendingUp,
  AccountCircle,
  Payment,
  Hotel,
  Info,
  ExitToApp,
  Person,
  Dashboard,
  LinkedIn,
} from "@material-ui/icons";
import Link from "@material-ui/core/Link";

export default function TextFieldComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "Name":
      return <AccountBox className={classes.iconStyle} />;
    case "Email":
      return <Email className={classes.iconStyle} />;
    case "Phone":
      return <Phone className={classes.iconStyle} />;
    case "Description":
      return <Description className={classes.iconStyle} />;
    case "Event":
      return <Event className={classes.iconStyle} />;
    case "Comment":
      return <Comment className={classes.iconStyle} />;
    case "Search":
      return <Search className={classes.iconStyle} />;
    case "Home":
      return <Home className={classes.iconStyle} />;
    case "People":
      return <PeopleAlt className={classes.iconStyle} />;
    case "Amenity":
      return <PlusOne className={classes.iconStyle} />;
    case "Property":
      return <Apartment className={classes.iconStyle} />;
    case "Graph":
      return <TrendingUp className={classes.iconStyle} />;
    case "Profile":
      return <AccountCircle className={classes.iconStyle} />;
    case "Payment":
      return <Payment className={classes.iconStyle} />;
    case "Bed":
      return <Hotel className={classes.iconStyle} />;
    case "About":
      return <Info className={classes.iconStyle} />;
    case "Login":
      return <ExitToApp className={classes.iconStyle} />;
    case "Tenant":
      return <Person className={classes.iconStyle} />;
    case "Dashboard":
      return <Dashboard className={classes.iconStyle} />;
    case "Linkedin":
      return (
        <Link href={props.link} target="_blank">
          <LinkedIn className={classes.iconStyle} />
        </Link>
      );
    default:
      return <div></div>;
  }
}
