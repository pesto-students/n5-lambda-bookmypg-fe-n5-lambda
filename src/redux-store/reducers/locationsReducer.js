import {
  GET_LOCATIONS_REQUEST_MADE,
  GET_LOCATIONS_REQUEST_RESOLVED,
  GET_LOCATIONS_REQUEST_FAILED,
  RESET_LOCATIONS_STATE,
  SET_SELECTED_LOCATION_REQUEST_MADE,
  GET_SELECTED_LOCATION_REQUEST_MADE,
} from "../../constant";
import requestState from "../utils/request";

const getLocationsRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getLocationsRequestState: {
      ...requestState.processing,
    },
  };
};

const getLocationsRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getLocationsRequestState: {
      ...requestState.resolved,
    },
    locations: payload,
  };
};

const getLocationsRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getLocationsRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetState = (state = {}) => {
  return {
    ...state,
    getLocationsRequestState: {},
    locations: {},
  };
};

const setSelectedLocationRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    selectedLocation: payload,
  };
};

const getSelectedLocationRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    setSelectedLocationRequestState: {
      ...requestState.processing,
    },
  };
};

const actionToResolverMap = {
  [GET_LOCATIONS_REQUEST_MADE]: getLocationsRequestMadeResolver,
  [GET_LOCATIONS_REQUEST_RESOLVED]: getLocationsRequestResolvedResolver,
  [GET_LOCATIONS_REQUEST_FAILED]: getLocationsRequestFailedResolver,

  [SET_SELECTED_LOCATION_REQUEST_MADE]: setSelectedLocationRequestMadeResolver,
  [GET_SELECTED_LOCATION_REQUEST_MADE]: getSelectedLocationRequestMadeResolver,

  [RESET_LOCATIONS_STATE]: resetState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
