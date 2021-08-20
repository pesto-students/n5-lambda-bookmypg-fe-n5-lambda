import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Pagination from "../pagination/pagination";
import useStyles from "./styles/PropertyListContent.styles";
import PropertyCard from "components/card/Card";

export default function PropertyListContent(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          {props.properties &&
            props.properties.length &&
            props.properties.map((property) => (
              <Grid item xs={12} spacing={1}>
                <PropertyCard
                  type="PropertyList"
                  property={property.propertydata}
                  reviewdata={property.reviewdata}
                />
              </Grid>
            ))}
          <Grid item xs={12} spacing={1}>
            <Pagination
              getProperties={props.getProperties}
              pagenumber={props.pagenumber}
              setPagenumber={props.setPagenumber}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
  const history = useHistory();

  const displayMobile = () => {
    return (
      <React.Fragment>
        <Grid container spacing={5}>
          {props.properties &&
            props.properties.length &&
            props.properties.map((property) => (
              <Grid item className={classes.containerStyle}>
                <PropertyCard
                  type="PropertyListMobile"
                  property={property.propertydata}
                />
              </Grid>
            ))}
        </Grid>
        <Pagination
          getProperties={props.getProperties}
          pagenumber={props.pagenumber}
          setPagenumber={props.setPagenumber}
        />
      </React.Fragment>
    );
  };

  return (
    <>
      <div>{mobileView ? displayMobile() : displayDesktop()}</div>
    </>
  );
}
