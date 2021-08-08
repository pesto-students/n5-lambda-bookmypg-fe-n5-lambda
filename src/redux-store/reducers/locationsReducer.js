import {
  GET_LOCATIONS_REQUEST_MADE,
  GET_LOCATIONS_REQUEST_RESOLVED,
  GET_LOCATIONS_REQUEST_FAILED,
  RESET_LOCATIONS_STATE,
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

const actionToResolverMap = {
  [GET_LOCATIONS_REQUEST_MADE]: getLocationsRequestMadeResolver,
  [GET_LOCATIONS_REQUEST_RESOLVED]: getLocationsRequestResolvedResolver,
  [GET_LOCATIONS_REQUEST_FAILED]: getLocationsRequestFailedResolver,
  [RESET_LOCATIONS_STATE]: resetState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
