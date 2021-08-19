import { action } from "typesafe-actions";
import {
  GET_AMENITIES_REQUEST_MADE,
  GET_AMENITIES_REQUEST_RESOLVED,
  GET_AMENITIES_REQUEST_FAILED,
  RESET_AMENITIES_STATE,
  UPDATE_AMENITY_REQUEST_MADE,
  UPDATE_AMENITY_REQUEST_RESOLVED,
  UPDATE_AMENITY_REQUEST_FAILED,
  ADD_AMENITY_REQUEST_MADE,
  ADD_AMENITY_REQUEST_RESOLVED,
  ADD_AMENITY_REQUEST_FAILED,
} from "../../constant";

export default {
  getAmenities: (payload) => action(GET_AMENITIES_REQUEST_MADE, payload),
  amenitiesReceived: (payload) =>
    action(GET_AMENITIES_REQUEST_RESOLVED, payload),
  getAmenitiesFailed: (payload) =>
    action(GET_AMENITIES_REQUEST_FAILED, payload),
  resetState: (payload) => action(RESET_AMENITIES_STATE, payload),

  addAmenity: (payload) => action(ADD_AMENITY_REQUEST_MADE, payload),
  amenityAdded: (payload) => action(ADD_AMENITY_REQUEST_RESOLVED, payload),
  addAmenityFailed: (payload) => action(ADD_AMENITY_REQUEST_FAILED, payload),

  updateAmenity: (payload) => action(UPDATE_AMENITY_REQUEST_MADE, payload),
  amenityUpdated: (payload) => action(UPDATE_AMENITY_REQUEST_RESOLVED, payload),
  updateAmenityFailed: (payload) =>
    action(UPDATE_AMENITY_REQUEST_FAILED, payload),
};
