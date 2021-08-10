import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
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
    description: ["About Us", "Contact Us"],
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

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography type="FormTitle" text={footer.title} />
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle2" color="textSecondary">
                      {item}
                    </Link>
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
