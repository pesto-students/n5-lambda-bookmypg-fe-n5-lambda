import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get, isEmpty } from "lodash";
import { Grid, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles/OwnerPropertyList.styles";
import Button from "components/button/Button";
import Link from "components/link/Link";
import PropertyCard from "components/card/Card";
import PropertiesSelector from "../../../user/helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";

export function OwnerPropertyList(props) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const [ownerId, setOwnerId] = React.useState(props.owner._id || "");
  const [ownerProperties, setOwnerProperties] = React.useState([]);

  useEffect(() => {
    props.resetProperties();
  }, [ownerId, props.owner._id]);

  useEffect(() => {
    if (ownerId) {
      const extraParams = `${ownerId}`;
      props.getPropertiesByOwner({ extraParams });
    }
  }, [ownerId, props.owner._id]);

  if (
    get(props, "properties.length") &&
    isEmpty(ownerProperties) &&
    props.owner._id
  ) {
    setOwnerProperties(props.properties);
  }

  const handleClickOpen = () => {
    setOwnerId(props.owner._id);
    setOpen(true);
  };

  const handleClose = () => {
    history.push("/owner-list");
    setOwnerProperties([]);
    setOwnerId("");
    setOpen(false);
  };

  return (
    <div className={classes.buttonStyle}>
      <Link text="View" handelClick={handleClickOpen} href="#" />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            width: "calc(80vw)",
            maxWidth: "none",
          },
        }}
      >
        <DialogContent>
          <Grid container spacing={2}>
            {get(ownerProperties, "length") &&
            get(props, "properties.length") ? (
              ownerProperties.map((property) => (
                <Grid
                  item
                  key={property.propertydata._id}
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <PropertyCard type="OwnerProperty" property={property} />
                </Grid>
              ))
            ) : (
              <Grid>{"No Properties Available"}</Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button text="Close" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);

  return {
    properties: propertiesSelector.getPropertiesData().data,
    total_properties: propertiesSelector.getPropertiesCount().count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPropertiesByOwner: (payload) =>
      dispatch(propertiesActions.getPropertiesByOwner(payload)),
    resetProperties: () => dispatch(propertiesActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerPropertyList);
