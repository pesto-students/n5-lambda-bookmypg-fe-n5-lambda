import {
  GET_PROPERTIES_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_RESOLVED,
  GET_PROPERTIES_REQUEST_FAILED,
  RESET_PROPERTIES_STATE,
} from "../../constant";
import requestState from "../utils/request";

const getPropertiesRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getPropertiesRequestState: {
      ...requestState.processing,
    },
  };
};

const getPropertiesRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getPropertiesRequestState: {
      ...requestState.resolved,
    },
    properties: payload,
  };
};

const getPropertiesRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getPropertiesRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetState = (state = {}) => {
  return {
    ...state,
    getPropertiesRequestState: {},
    properties: {},
  };
};

const actionToResolverMap = {
  [GET_PROPERTIES_REQUEST_MADE]: getPropertiesRequestMadeResolver,
  [GET_PROPERTIES_REQUEST_RESOLVED]: getPropertiesRequestResolvedResolver,
  [GET_PROPERTIES_REQUEST_FAILED]: getPropertiesRequestFailedResolver,
  [RESET_PROPERTIES_STATE]: resetState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
