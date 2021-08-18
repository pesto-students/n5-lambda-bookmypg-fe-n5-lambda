import { action } from "typesafe-actions";
import {
  GET_LOCATIONS_REQUEST_MADE,
  GET_LOCATIONS_REQUEST_RESOLVED,
  GET_LOCATIONS_REQUEST_FAILED,
  RESET_LOCATIONS_STATE,
  SET_SELECTED_LOCATION_REQUEST_MADE,
  GET_SELECTED_LOCATION_REQUEST_MADE,
} from "../../constant";

export default {
  getLocations: (payload) => action(GET_LOCATIONS_REQUEST_MADE, payload),

  locationsReceived: (payload) =>
    action(GET_LOCATIONS_REQUEST_RESOLVED, payload),

  getLocationsFailed: (payload) =>
    action(GET_LOCATIONS_REQUEST_FAILED, payload),

  resetState: (payload) => action(RESET_LOCATIONS_STATE, payload),

  setSelectedLocation: (payload) =>
    action(SET_SELECTED_LOCATION_REQUEST_MADE, payload),

  getSelectedLocation: (payload) =>
    action(GET_SELECTED_LOCATION_REQUEST_MADE, payload),
};
