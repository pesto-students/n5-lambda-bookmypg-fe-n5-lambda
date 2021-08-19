import React from "react";
import { get } from "lodash";
import useStyles from "./Card.styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { S3_BUCKET_IMAGES_BASEURL, S3_BUCKET_URL } from "constant";
import Cardrating from "user/components/rating/cardratings";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MoreButton from "@material-ui/core/Button";
import Rating from "user/components/rating/rating";
import ScheduleVisit from "user/components/schedulevisit/ScheduleVisit";

export default function ButtonComponent(props) {
  const classes = useStyles();
  const history = useHistory();
  switch (props.type) {
    case "AboutUs":
      return (
        <Card className={classes.aboutusCard}>
          <CardMedia
            className={classes.cardMedia}
            image={`${S3_BUCKET_IMAGES_BASEURL}/${props.imageName}`}
            title="Image_title"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.pos} color="#fff">
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      );
    case "PropertyList":
      return (
        <Card className={classes.propertylistRoot} style={{ height: "230px" }}>
          <Box>
            <CardMedia
              className={classes.cover}
              image={`${S3_BUCKET_URL}/${props.property.photos[0]}`}
              title={props.property.photos[0]}
            />
          </Box>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {props.property.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.property.description}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                ₹{props.property.rent}
              </Typography>

              <div className={classes.buttonMarginStyle}>
                <Grid container spacing={3}>
                  <Box>
                    <ScheduleVisit
                      owner={props.property.owner.email}
                      property_name={props.property.name}
                      property_id={props.property._id}
                    />
                  </Box>
                  <Box>
                    <MoreButton
                      variant="contained"
                      color="secondary"
                      style={{
                        marginLeft: "10px",
                        textTransform: "none",
                      }}
                      onClick={() =>
                        history.push(`/property-details/${props.property._id}`)
                      }
                    >
                      More Details
                    </MoreButton>
                  </Box>
                </Grid>
              </div>
            </CardContent>
          </div>

          <Rating
            value={get(props,'reviewdata.avgratings') ? props.reviewdata.avgratings : 0}
            number={get(props,'reviewdata.reviews.length') ? props.reviewdata.reviews.length : 0}
            mobileView={true}
          />
        </Card>
      );
    case "PropertyListMobile":
      return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={`${S3_BUCKET_URL}/${props.property.photos[0]}`}
            title={props.property.photos[0]}
          />
          <div className={classes.detailsMobile}>
            <CardContent className={classes.content}>
              <Grid>
                <Typography component="h5" variant="h5">
                  {props.property.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.descriptionStyle}
                >
                  {props.property.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  ₹{props.property.rent}
                </Typography>
              </Grid>
              <div className={classes.ratingStyle}>
                <Rating 
                  value={get(props,'reviewdata.avgratings') ? props.reviewdata.avgratings : 0}
                  number={get(props,'reviewdata.reviews.length') ? props.reviewdata.reviews.length : 0}
                />
              </div>
              <div className={classes.buttonsMobile}>
                <Grid container spacing={2}>
                  <ScheduleVisit
                    owner={props.property.owner.email}
                    property_name={props.property.name}
                  />

                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buttonStyle}
                    style={{ textTransform: "none" }}
                    onClick={() =>
                      history.push(`/property-details/${props.property._id}`)
                    }
                  >
                    More details
                  </Button>
                </Grid>
              </div>
            </CardContent>
          </div>
        </Card>
      );
    case "OwnerProperty":
      return (
        <Card className={classes.propertycard}>
          <CardMedia
            className={classes.cardMedia}
            image={`${S3_BUCKET_URL}/${props.property.propertydata.photos[0]}`}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <div className={classes.propertynameStyle}>
              <Typography type="FormTitle">
                {props.property.propertydata.name}
              </Typography>
              <Typography type="caption">
                <LocationOnIcon />
                {props.property.propertydata.location.name}
              </Typography>
            </div>
            <Typography type="subtitle1" color="textSecondary">
              {props.property.propertydata.description}
            </Typography>
          </CardContent>
          <div className={classes.ratingboxStyle}>
            <Typography type="subtitle1">
              ₹{props.property.propertydata.rent}
            </Typography>
            <Cardrating
              value={get(props,'reviewdata.avgratings') ? props.reviewdata.avgratings : 0}
              number={get(props,'reviewdata.reviews.length') ? props.reviewdata.reviews.length : 0}
            />
          </div>
        </Card>
      );
    default:
      return (
        <Card className={classes.similarPropertyCard}>
          <CardMedia
            className={classes.cardMedia}
            image={`${S3_BUCKET_URL}/${props.property.photos[0]}`}
            title={props.property.photos[0]}
          />
          <CardContent className={classes.cardContent}>
            <div className={classes.propertynameStyle}>
              <Typography gutterBottom variant="h6" component="h2">
                {props.property.name}
              </Typography>
              <Typography gutterBottom variant="caption">
                <LocationOnIcon />
                {props.property.location.name}
              </Typography>
            </div>
            <Typography gutterBottom variant="body2">
              {props.property.description}
            </Typography>
          </CardContent>
          <div className={classes.ratingboxStyle}>
            <Cardrating 
              value={get(props,'reviewdata.avgratings') ? props.reviewdata.avgratings : 0}
              number={get(props,'reviewdata.reviews.length') ? props.reviewdata.reviews.length : 0}
            />
            <Button
              size="small"
              variant="contained"
              color="ContainedSecondary"
              className={classes.buttonStyle}
              onClick={() =>
                history.push(`/property-details/${props.property._id}`)
              }
            >
              More Details
            </Button>
          </div>
        </Card>
      );
  }
}
