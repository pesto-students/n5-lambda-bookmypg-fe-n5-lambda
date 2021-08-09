import { action } from "typesafe-actions";
import {
  GET_PROPERTIES_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_RESOLVED,
  GET_PROPERTIES_REQUEST_FAILED,
  RESET_PROPERTIES_STATE,
  GET_LATEST_PROPERTIES_REQUEST_MADE,
  GET_LATEST_PROPERTIES_REQUEST_RESOLVED,
  GET_LATEST_PROPERTIES_REQUEST_FAILED,
  RESET_LATEST_PROPERTIES_STATE,
} from "../../constant";

export default {
  getProperties: (payload) => action(GET_PROPERTIES_REQUEST_MADE, payload),

  propertiesReceived: (payload) =>
    action(GET_PROPERTIES_REQUEST_RESOLVED, payload),

  getPropetiesFailed: (payload) =>
    action(GET_PROPERTIES_REQUEST_FAILED, payload),

  resetState: (payload) => action(RESET_PROPERTIES_STATE, payload),

  getLatestProperties: (payload) =>
    action(GET_LATEST_PROPERTIES_REQUEST_MADE, payload),

  latestPropertiesReceived: (payload) =>
    action(GET_LATEST_PROPERTIES_REQUEST_RESOLVED, payload),

  getLatestPropetiesFailed: (payload) =>
    action(GET_LATEST_PROPERTIES_REQUEST_FAILED, payload),

  resetLatestPropertiesState: (payload) => action(RESET_LATEST_PROPERTIES_STATE, payload),
};
