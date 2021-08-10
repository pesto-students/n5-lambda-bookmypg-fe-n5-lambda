import {
  GET_COMPLAINTS_REQUEST_MADE,
  GET_COMPLAINTS_REQUEST_RESOLVED,
  GET_COMPLAINTS_REQUEST_FAILED,
  RESET_COMPLAINTS_STATE,
} from "../../constant";
import requestState from "../utils/request";

const getComplaintsRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getComplaintsRequestState: {
      ...requestState.processing,
    },
  };
};

const getComplaintsRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getComplaintsRequestState: {
      ...requestState.resolved,
    },
    complaints: payload,
  };
};

const gettComplaintsRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    gettComplaintsRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetState = (state = {}) => {
  return {
    ...state,
    gettComplaintsRequestState: {},
    complaints: {},
  };
};

const actionToResolverMap = {
  [GET_COMPLAINTS_REQUEST_MADE]: getComplaintsRequestMadeResolver,
  [GET_COMPLAINTS_REQUEST_RESOLVED]: getComplaintsRequestResolvedResolver,
  [GET_COMPLAINTS_REQUEST_FAILED]: gettComplaintsRequestFailedResolver,
  [RESET_COMPLAINTS_STATE]: resetState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
