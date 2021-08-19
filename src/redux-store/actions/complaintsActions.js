import { action } from "typesafe-actions";
import {
  GET_COMPLAINTS_REQUEST_MADE,
  GET_COMPLAINTS_REQUEST_RESOLVED,
  GET_COMPLAINTS_REQUEST_FAILED,
  RESET_COMPLAINTS_STATE,
} from "../../constant";

export default {
  getComplaints: (payload) => action(GET_COMPLAINTS_REQUEST_MADE, payload),

  complaintsReceived: (payload) =>
    action(GET_COMPLAINTS_REQUEST_RESOLVED, payload),

  getComplaintsFailed: (payload) =>
    action(GET_COMPLAINTS_REQUEST_FAILED, payload),

  resetState: (payload) => action(RESET_COMPLAINTS_STATE, payload),
};
