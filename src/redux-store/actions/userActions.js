import { action } from "typesafe-actions";
import {
  GET_USER_REQUEST_MADE,
  GET_USER_REQUEST_RESOLVED,
  GET_USER_REQUEST_FAILED,
  RESET_USER_STATE,
} from "../../constant";

export default {
  getUser: (payload) => action(GET_USER_REQUEST_MADE, payload),

  userReceived: (payload) => action(GET_USER_REQUEST_RESOLVED, payload),

  getUserFailed: (payload) => action(GET_USER_REQUEST_FAILED, payload),

  resetState: (payload) => action(RESET_USER_STATE, payload),
};
