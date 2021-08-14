import {
  GET_AMENITIES_REQUEST_MADE,
  GET_AMENITIES_REQUEST_RESOLVED,
  GET_AMENITIES_REQUEST_FAILED,
  RESET_AMENITIES_STATE,
  UPDATE_AMENITY_REQUEST_MADE,
  UPDATE_AMENITY_REQUEST_RESOLVED,
  UPDATE_AMENITY_REQUEST_FAILED,
} from "../../constant";
import requestState from "../utils/request";

const getAmenitiesRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getAmenitiesRequestState: {
      ...requestState.processing,
    },
  };
};

const getAmenitiesRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getAmenitiesRequestState: {
      ...requestState.resolved,
    },
    amenities: payload,
  };
};

const getAmenitiesRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getAmenitiesRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetState = (state = {}) => {
  return {
    ...state,
    getAmenitiesRequestState: {},
    amenities: {},
  };
};

const updateAmenityRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updateAmenityRequestState: {
      ...requestState.processing,
    },
  };
};

const updateAmenityRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    updateAmenityRequestState: {
      ...requestState.resolved,
    },
  };
};

const updateAmenityRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updateAmenityRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const actionToResolverMap = {
  [GET_AMENITIES_REQUEST_MADE]: getAmenitiesRequestMadeResolver,
  [GET_AMENITIES_REQUEST_RESOLVED]: getAmenitiesRequestResolvedResolver,
  [GET_AMENITIES_REQUEST_FAILED]: getAmenitiesRequestFailedResolver,
  [RESET_AMENITIES_STATE]: resetState,
  [UPDATE_AMENITY_REQUEST_MADE]: updateAmenityRequestMadeResolver,
  [UPDATE_AMENITY_REQUEST_RESOLVED]: updateAmenityRequestResolvedResolver,
  [UPDATE_AMENITY_REQUEST_FAILED]: updateAmenityRequestFailedResolver,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};