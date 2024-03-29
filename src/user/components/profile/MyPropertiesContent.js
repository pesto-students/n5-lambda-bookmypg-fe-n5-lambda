import React, { useEffect } from "react";
import { get } from "lodash";
import { connect } from "react-redux";
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
import complaintsActions from "../../../redux-store/actions/complaintsActions";
import PropertiesSelector from "../../helpers/PropertiesSelector";
import propertiesActions from "../../../redux-store/actions/propertiesActions";
import { S3_BUCKET_URL } from "constant";

export function MyPropertiesContent(props) {
  const classes = useStyles();
  const [refresh, setRefresh] = React.useState(false);

  useEffect(() => {
    props.getUser(props.user.email);
  }, []);

  useEffect(() => {
    props.getProperties();
  }, [refresh]);

  let property;
  let review;
  if (!property && get(props, "user.property._id") && get(props, "properties.length")) {
    property =
      props.properties.filter(
        (p) => p.propertydata._id === props.user.property._id
      )[0] || "";
    if(get(property, 'reviewdata.reviews.length'))
      review = property.reviewdata.reviews.filter((re) => re.reviewedby._id === props.user._id)[0];
  }
  console.log("property", property);
  console.log("review", review);
  
  return (
    <div className="Table">
      {property && (
        <ResponsiveDrawer headersData={props.responsivedrawerData}>
          <Grid container className={classes.gridStyle}>
            <Grid item xs={12} sm={6} md={4}>
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

                  {review ? (
                    <div className={classes.ratingboxStyle}>
                      <Box display="flex" p={1}>
                        <Rating
                          value={review.rating}
                          type="Large"
                          readonly={true}
                        />
                      </Box>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        className={classes.descriptionStyle}
                      >
                        {review.description}
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Box display="flex">
                        <Typography gutterBottom variant="subtitle2">
                          You haven't reviewed this property yet. Please{" "}
                          <ReviewProperty
                            property_id={property.propertydata._id}
                            user_id={props.user._id}
                            value={property.propertydata.name}
                            setRefresh={setRefresh}
                            refresh={refresh}
                          />{" "}
                          to review it.
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
                  <Button
                    text="Already Paid"
                    type="Paybutton"
                    disabled={true}
                  />
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
    getProperties: () => dispatch(propertiesActions.getProperties()),
    raiseComplaint: (payload) =>
      dispatch(complaintsActions.raiseComplaint(payload)),
    resetProperties: () => dispatch(propertiesActions.resetState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPropertiesContent);
