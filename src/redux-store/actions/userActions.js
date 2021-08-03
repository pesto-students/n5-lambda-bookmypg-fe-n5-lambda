import { action } from "typesafe-actions";
import {
  SUBMIT_USER_REQUEST_MADE,
  SUBMIT_USER_REQUEST_RESOLVED,
  SUBMIT_USER_REQUEST_FAILED,
} from "../../constant";

export default {
  submitUser: (payload) => action(SUBMIT_USER_REQUEST_MADE, payload),

  userSubmitted: (payload) => action(SUBMIT_USER_REQUEST_RESOLVED, payload),

  submitUserFailed: (payload) => action(SUBMIT_USER_REQUEST_FAILED, payload),
};
