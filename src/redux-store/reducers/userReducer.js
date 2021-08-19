import {
  GET_USER_REQUEST_MADE,
  GET_USER_REQUEST_RESOLVED,
  GET_USER_REQUEST_FAILED,
  RESET_USER_STATE,
} from "../../constant";
import requestState from "../utils/request";

const getUserRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getUserRequestState: {
      ...requestState.processing,
    },
  };
};

const getUserRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getUserRequestState: {
      ...requestState.resolved,
    },
    user: payload,
  };
};

const getUserRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getUserRequestState: {
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
  [GET_USER_REQUEST_MADE]: getUserRequestMadeResolver,
  [GET_USER_REQUEST_RESOLVED]: getUserRequestResolvedResolver,
  [GET_USER_REQUEST_FAILED]: getUserRequestFailedResolver,
  [RESET_USER_STATE]: resetState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
