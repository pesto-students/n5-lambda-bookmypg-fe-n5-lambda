import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sortIcons: {
    width: "8px",
    height: "8px",

    verticalAlign: "top",
  },
  sorting: {
    display: "inline-block",
    marginLeft: "8px",
    height: "15px",
    width: "20px",
    position: "relative",
    verticalAlign: "middle",
  },
  sortUp: {
    top: "-1px",
    width: "8px",
    height: "8px",
    cursor: "pointer",
    position: "absolute",
  },
  sortDown: {
    bottom: "-1px",
    width: "8px",
    height: "8px",
    cursor: "pointer",
    position: "absolute",
  },
  viewlinkStyle: {
    display: "flex",
    marginLeft: "5px",
    alignItems: "center",
  },
  switchCellStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  customBorder: {
    border: `3px solid grey`,
    overflowX: "auto",
  },
  paperStyle: {
    maxHeight: "400px",
    overflowX: "auto",
    border: "none",
  },
}));

export default useStyles;
