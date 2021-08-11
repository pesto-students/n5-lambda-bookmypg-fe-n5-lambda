import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResponsiveDrawer from "../responsivedrawer/responsivedrawer";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Tablecomponent from "./propertytable";
import Pagination from "../pagination/pagination";
import Addproperty from "./addproperty";
import PropertiesSelector from "../../../user/helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import UserSelector from "../../../user/helpers/UserSelector";
import useStyles from "./styles/propertylistcontent.styles";

export function PropertyListContent(props) {
  const classes = useStyles();

  const [pagenumber, setPagenumber] = React.useState(1);
  const [countperpage, setCountperpage] = React.useState(10);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    props.resetProperties();
  }, []);

  useEffect(() => {
    const extraParams = `?pagenumber=${pagenumber}&countperpage=${countperpage}&search=${search}`;
    props.getProperties({ extraParams });
  }, [pagenumber, countperpage, search]);

  let properties;
  if(props.properties && props.properties.length){
  properties = props.properties.filter(
    (property) => property.owner._id === props.user._id
  );
  }

  return (
    <div className="Table">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} className={classes.containerStyle}>
            <Typography component="h1" variant="h5">
              Property List
            </Typography>
            <Grid container justify={"space-between"}>
              <Grid item xs={12} md={4} className={classes.searchboxStyle}>
                <TextField
                  id="standard-basic"
                  label="Search by property location"
                  className={classes.textfieldStyle}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.propertybuttonStyle}>
                <Addproperty />
              </Grid>
            </Grid>
            <Tablecomponent properties={properties} />
          </Grid>
          <Pagination
            pagenumber={pagenumber}
            setPagenumber={setPagenumber}
            countperpage={countperpage}
            setCountperpage={setCountperpage}
            count={props.properties.length}
          />
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const propertiesSelector = PropertiesSelector(state.properties);
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
    properties: propertiesSelector.getPropertiesData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: (payload) =>
      dispatch(propertiesActions.getProperties(payload)),
    // updateProperty: (id) => dispatch(propertiesActions.updateProperty(id)),
    resetProperties: () => dispatch(propertiesActions.resetState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyListContent);
