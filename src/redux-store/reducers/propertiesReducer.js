import {
  GET_PROPERTIES_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_RESOLVED,
  GET_PROPERTIES_REQUEST_FAILED,
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
    getUserRequestState: {},
    user: {},
  };
};

const actionToResolverMap = {
  [GET_PROPERTIES_REQUEST_MADE]: getPropertiesRequestMadeResolver,
  [GET_PROPERTIES_REQUEST_RESOLVED]: getPropertiesRequestResolvedResolver,
  [GET_PROPERTIES_REQUEST_FAILED]: getPropertiesRequestFailedResolver,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
