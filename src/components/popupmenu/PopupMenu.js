import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { get } from 'lodash';
import { Menu, MenuItem, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./PopupMenu.styles";

export default function MenuComponent(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getProfileChoices = () => {
    if (get(props, 'listitems.length'))
      return props.listitems.map(({ label, href }) => {
        if (label === "My Profile")
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
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
            }}
            onClick={props.handleLogout}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
  };


                
  return (
    <div className={classes.containerStyle}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className={classes.iconStyle} />
      </IconButton>
      <Menu
        id="popup-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {getProfileChoices()}
      </Menu>
    </div>
  );
}
