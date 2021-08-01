import { action } from "typesafe-actions";
import {
  GET_PROPERTIES_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_RESOLVED,
  GET_PROPERTIES_REQUEST_FAILED,
} from "../../constant";

export default {
  getProperties: (payload) => action(GET_PROPERTIES_REQUEST_MADE, payload),

  propertiesReceived: (payload) =>
    action(GET_PROPERTIES_REQUEST_RESOLVED, payload),

  getPropetiesFailed: (payload) =>
    action(GET_PROPERTIES_REQUEST_FAILED, payload),
};
