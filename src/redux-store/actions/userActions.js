import { action } from "typesafe-actions";
import {
  GET_USER_REQUEST_MADE,
  GET_USER_REQUEST_RESOLVED,
  GET_USER_REQUEST_FAILED,
  RESET_USER_STATE,
  UPDATE_USER_REQUEST_MADE,
  UPDATE_USER_REQUEST_RESOLVED,
  UPDATE_USER_REQUEST_FAILED,
} from "../../constant";

export default {
  getUser: (payload) => action(GET_USER_REQUEST_MADE, payload),
  userReceived: (payload) => action(GET_USER_REQUEST_RESOLVED, payload),
  getUserFailed: (payload) => action(GET_USER_REQUEST_FAILED, payload),
  resetState: (payload) => action(RESET_USER_STATE, payload),

  updateUser: (payload) => action(UPDATE_USER_REQUEST_MADE, payload),
  userUpdated: (payload) => action(UPDATE_USER_REQUEST_RESOLVED, payload),
  updateUserFailed: (payload) => action(UPDATE_USER_REQUEST_FAILED, payload),
};
