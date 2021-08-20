import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Grid,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles/ViewComplaint.styles";
import CloseButton from "components/closebutton/CloseButton";
import Button from "components/button/Button";
import Link from "components/link/Link";
import Typography from "components/typography/Typography";
import TextField from "components/textfield/Textfield";
import FormImage from "components/formimage/FormImage";
import Select from "components/select/Select";
import ComplaintsSelector from "../ComplaintsSelector";
import complainsActions from "../../../redux-store/actions/complaintsActions";
import UserSelector from "../../../user/helpers/UserSelector";

const listitems = ["Pending", "Resolved"];

export function ViewComplaint(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = new Date();

  const [remark, setRemark] = React.useState("");
  const [status, setStatus] = React.useState("");

  date.setDate(date.getDate() + 7);

  const complaint = props.complaint;

  const handleSubmit = () => {
    const params = {
      _id: complaint._id,
      raisedby: complaint.raisedby,
      property: complaint.property_id,
      status,
      remark,
    };
    const user = props.user;
    props.updateComplaint({ params, user });
    setOpen(false);
    toast("Property has been added successfully!");
    setRemark("");
    setStatus("");
    setTimeout(() => {
      props.setRefresh(!props.refresh);
    }, 500);
  }

  return (
    <div>
      <Link text={complaint.status} handelClick={handleClickOpen} href="#" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            width: "calc(478px + 0.5vw)",
          },
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <Box flexGrow={1}></Box>
          <Box>
            <CloseButton handleClick={handleClose} />
          </Box>
        </Box>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          <div>
            <Typography type="FormTitle" text="Complaint Details" />
            <FormImage imageName="Raisecomplaint.jpg" />
          </div>
        </DialogTitle>

        <DialogContent className={classes.formAlign}>
          <Grid spacing={3} className={classes.containerStyle}>
            <TextField
              id="standard-disabled"
              label="Complaint Raisedby"
              value={complaint.name}
              icon="Name"
            />

            <TextField
              id="standard-disabled"
              value={complaint.email}
              icon="Email"
            />

            <TextField value={complaint.phone} icon="Phone" />

            <TextField
              id="standard-disabled"
              value={complaint.createdAt}
              icon="Event"
            />

            <TextField
              id="standard-disabled"
              value={complaint.description}
              maxrows={2}
              multiline={true}
              icon="Description"
            />

            <TextField
              label="Remarks"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              maxrows={4}
              multiline={true}
              icon="Comment"
              type="standardForm"
            />

            <Select
              name="Complaint Status"
              value={status}
              setValue={setStatus}
              listitems={listitems}
            />
          </Grid>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button text="Submit" handleClick={handleSubmit} />
          <Button text="Cancel" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state) => {
  const complaintsSelector = ComplaintsSelector(state.complaints);
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
    complaints: complaintsSelector.getComplaintsData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComplaints: (payload) =>
      dispatch(complainsActions.getComplaints(payload)),
    updateComplaint: (payload) => dispatch(complainsActions.updateComplaint(payload)),
    resetComplaints: () => dispatch(complainsActions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewComplaint);