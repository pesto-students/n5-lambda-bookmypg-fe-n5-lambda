import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";
import Typography from "@material-ui/core/Typography";
import Complaint from "../complaint/RaiseComplaint";
import ReviewProperty from "../review/ReviewProperty";
import { Grid, Card, CardContent, CardMedia, Box } from "@material-ui/core";
import useStyles from "./styles/MyPropertiesContent.styles";
import Button from "components/button/Button";
import Rating from "components/rating/rating";
import UserSelector from "../../helpers/UserSelector";
import userActions from "../../../redux-store/actions/userActions";
import complaintSelector from "../../helpers/ComplaintSelector";
import complaintsActions from "../../../redux-store/actions/complaintsActions";
import PropertiesSelector from "../../helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import { S3_BUCKET_URL } from "constant";

const data = {
  property: "Zolo House 1",
  rent: "15000/month",
  owner: "Mr. Agarwal",
  review: {},
  numratings: 10,
};

export function MyPropertiesContent(props) {
  const classes = useStyles();

  const [propertyId, setPropertyId] = React.useState(
    props.user && props.user.property ? props.user.property._id : []
  );
  const property =
    props.properties.filter((p) => p.propertydata._id === propertyId)[0] || [];

  return (
    <div className="Table">
      {property && (
        <ResponsiveDrawer headersData={props.responsivedrawerData}>
          <Grid container className={classes.gridStyle}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`${S3_BUCKET_URL}/${property.propertydata.photos[0]}`}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <div className={classes.propertydetailStyle}>
                    <Typography variant="h6" component="h2">
                      {property.propertydata.name}
                    </Typography>
                    <Typography variant="body2" className={classes.ownerStyle}>
                      by{" "}
                      {property.propertydata.owner.firstName +
                        " " +
                        property.propertydata.owner.lastName}
                    </Typography>
                  </div>
                  <div>
                    <Typography gutterBottom variant="subtitle2">
                      ₹&nbsp;{property.propertydata.rent}
                    </Typography>
                  </div>

                  {data.review.rating ? (
                    <div className={classes.ratingboxStyle}>
                      <Box display="flex" p={1}>
                        <Rating
                          value={data.review.rating}
                          type="Large"
                          readonly={true}
                        />
                      </Box>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        className={classes.descriptionStyle}
                      >
                        {data.review.description}
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Box display="flex" p={1}>
                        <Typography gutterBottom variant="subtitle2">
                          You haven't reviewed this property yet. To Review it
                          <ReviewProperty value={property.propertydata.name} />
                        </Typography>
                      </Box>
                    </div>
                  )}
                </CardContent>
                <div className={classes.buttonStyle}>
                  <Complaint
                    property={property.propertydata}
                    user={props.user}
                    raiseComplaint={props.raiseComplaint}
                  />
                  <Button text="Pay Rent" type="Paybutton" />
                </div>
              </Card>
            </Grid>
          </Grid>
        </ResponsiveDrawer>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const userSelector = UserSelector(state.user);
  const propertiesSelector = PropertiesSelector(state.properties);

  return {
    user: userSelector.getUserData().data,
    properties: propertiesSelector.getPropertiesData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (payload) => dispatch(userActions.getUser(payload)),
    raiseComplaint: (payload) =>
      dispatch(complaintsActions.raiseComplaint(payload)),
    resetProperties: () => dispatch(propertiesActions.resetState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPropertiesContent);
