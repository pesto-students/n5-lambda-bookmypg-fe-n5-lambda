import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  contentStyle: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    maxWidth: "960px",
  },
  section: {
    paddingLeft: "170px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "170px",
      width: "calc(90% + 0.5vw)",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "170px",
    },
  },
  nosection: {
    alignContent: "center",
    width: "calc(100% + 0.5vw)",
  },
}));

export default useStyles;
