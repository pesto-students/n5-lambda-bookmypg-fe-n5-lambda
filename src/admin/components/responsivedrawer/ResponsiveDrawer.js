import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./ResponsiveDrawer.styles";
import theme from "theme/theme";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "components/icon/Icon";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  MenuItem,
  Link,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

export default function ResponsiveDrawer(props) {
  const [mobileOpen, setmobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setmobileOpen(!mobileOpen);
  };

  const classes = useStyles();
  const drawer = () => {
    return props.headersData.map(({ label, href, icon }) => {
      return (
        <Link
          key={label}
          {...{
            component: RouterLink,
            to: href,
            style: { textDecoration: "none" },
          }}
        >
          <MenuItem className={classes.menuitemStyle}>
            <ListItemIcon className={classes.listitemStyle}>
              <Icon type={icon} />
            </ListItemIcon>
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <SortIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

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
