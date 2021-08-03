import {
  SUBMIT_USER_REQUEST_MADE,
  SUBMIT_USER_REQUEST_RESOLVED,
  SUBMIT_USER_REQUEST_FAILED,
} from "../../constant";
import requestState from "../utils/request";

const submitUserRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    submitUserRequestState: {
      ...requestState.processing,
    },
  };
};

const submitUserRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    submitUserRequestState: {
      ...requestState.resolved,
    },
    user: payload,
  };
};

const submitUserRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    submitUserRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetState = (state = {}) => {
  return {
    ...state,
    submitUserRequestState: {},
    user: {},
  };
};

const actionToResolverMap = {
  [SUBMIT_USER_REQUEST_MADE]: submitUserRequestMadeResolver,
  [SUBMIT_USER_REQUEST_RESOLVED]: submitUserRequestResolvedResolver,
  [SUBMIT_USER_REQUEST_FAILED]: submitUserRequestFailedResolver,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
