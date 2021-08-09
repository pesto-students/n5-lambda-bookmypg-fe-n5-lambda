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

const getLatestPropertiesRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getLatestPropertiesRequestState: {
      ...requestState.processing,
    },
  };
};

const getLatestPropertiesRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getLatestPropertiesRequestState: {
      ...requestState.resolved,
    },
    latestProperties: payload,
  };
};

const getLatestPropertiesRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getLatestPropertiesRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetLatestPropertiesState = (state = {}) => {
  return {
    ...state,
    getLatestPropertiesRequestState: {},
    latestProperties: {},
  };
};

const actionToResolverMap = {
  [GET_PROPERTIES_REQUEST_MADE]: getPropertiesRequestMadeResolver,
  [GET_PROPERTIES_REQUEST_RESOLVED]: getPropertiesRequestResolvedResolver,
  [GET_PROPERTIES_REQUEST_FAILED]: getPropertiesRequestFailedResolver,
  [RESET_PROPERTIES_STATE]: resetState,
  [GET_LATEST_PROPERTIES_REQUEST_MADE]: getLatestPropertiesRequestMadeResolver,
  [GET_LATEST_PROPERTIES_REQUEST_RESOLVED]:
    getLatestPropertiesRequestResolvedResolver,
  [GET_LATEST_PROPERTIES_REQUEST_FAILED]:
    getLatestPropertiesRequestFailedResolver,
  [RESET_LATEST_PROPERTIES_STATE]: resetLatestPropertiesState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
