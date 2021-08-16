import React from "react";
import useStyles from "./Card.styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function ButtonComponent(props) {
  const classes = useStyles();
  switch (props.type) {
    case "SimpleCard":
      return (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      );

    default:
      return (
        <Button
          variant="contained"
          color={props.color ? props.color : "secondary"}
          key={props.text}
          onClick={props.handleClick}
          className={classes.buttonStyle}
        >
          {props.text}
        </Button>
      );
  }
}
