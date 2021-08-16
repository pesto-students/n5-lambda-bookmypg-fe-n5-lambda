import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Rating from "../rating/rating";
import Pagination from "../pagination/pagination";
import useStyles from "./styles/PropertyListContent.styles";
import Button from "../../../components/button/Button";
import ScheduleVisit from "../schedulevisit/ScheduleVisit";
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
                <PropertyCard type="PropertyList" property={property} />
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
        <Grid container spacing={5} className={classes.containerStyle}>
          {props.properties &&
            props.properties.length &&
            props.properties.map((property) => (
              <Grid item>
                <PropertyCard type="PropertyListMobile" property={property} />
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
