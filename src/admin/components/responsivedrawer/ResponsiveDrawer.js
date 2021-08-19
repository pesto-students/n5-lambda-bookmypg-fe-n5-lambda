import React, { useState } from "react";
import PropTypes from "prop-types";
import { Drawer, Hidden, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./ResponsiveDrawer.styles";
import theme from "../../theme/theme";

const headersData = [
  {
    label: "Home",
    href: "/admin-home",
  },
  {
    label: "Owners",
    href: "/owner-list",
  },
  {
    label: "Amenities",
    href: "/amenity-list",
  },
];

export default function ResponsiveDrawer(props) {
  const [mobileOpen, setmobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setmobileOpen(!mobileOpen);
  };

  const classes = useStyles();
  const drawer = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          key={label}
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer()}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer()}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
      </div>
    </React.Fragment>
  );
}
ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
