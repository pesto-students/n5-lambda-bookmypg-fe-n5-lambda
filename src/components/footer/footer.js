import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import useStyles from "./footer.styles";
import Typography from "../typography/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"N5 Team Lambda © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Quick links",
    description: ["About Us"],
  },
  {
    title: "Features",
    description: [
      "Search Accomodation",
      "Pay rents on One Click",
      "Share your reviews",
      "Raise your complaints",
    ],
  },
  {
    title: "Contact",
    description: [
      "Email: abc@gmail.com",
      "Phone: +911234567890",
      "Contact us via email to register as PG-Owner.",
    ],
  },
];

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div
      className={props.type === "center" ? classes.nosection : classes.section}
    >
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography type="FormTitle" text={footer.title} />

              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    {footer.title === "Quick links" ? (
                      <Link
                        href="#"
                        variant="subtitle2"
                        color="textSecondary"
                        key={item}
                        {...{
                          component: RouterLink,
                          to: "/about",
                          color: "inherit",
                        }}
                      >
                        {item}
                      </Link>
                    ) : (
                      <Typography type="BodyText" text={item} />
                    )}
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
