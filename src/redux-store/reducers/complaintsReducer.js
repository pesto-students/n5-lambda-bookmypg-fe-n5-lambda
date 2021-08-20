import {
  GET_COMPLAINTS_REQUEST_MADE,
  GET_COMPLAINTS_REQUEST_RESOLVED,
  GET_COMPLAINTS_REQUEST_FAILED,
  RESET_COMPLAINTS_STATE,
  RAISE_COMPLAINT_REQUEST_MADE,
  RAISE_COMPLAINT_REQUEST_RESOLVED,
  RAISE_COMPLAINT_REQUEST_FAILED,
  UPDATE_COMPLAINT_REQUEST_MADE,
  UPDATE_COMPLAINT_REQUEST_RESOLVED,
  UPDATE_COMPLAINT_REQUEST_FAILED,
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

const raiseComplaintRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    raiseComplaintRequestState: {
      ...requestState.processing,
    },
  };
};

const raiseComplaintRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    raiseComplaintRequestState: {
      ...requestState.resolved,
    },
  };
};

const raiseComplaintRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    raiseComplaintRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const updateComplaintRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updateComplaintRequestState: {
      ...requestState.processing,
    },
  };
};

const updateComplaintRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    updateComplaintRequestState: {
      ...requestState.resolved,
    },
  };
};

const updateComplaintRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updateComplaintRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const actionToResolverMap = {
  [GET_COMPLAINTS_REQUEST_MADE]: getComplaintsRequestMadeResolver,
  [GET_COMPLAINTS_REQUEST_RESOLVED]: getComplaintsRequestResolvedResolver,
  [GET_COMPLAINTS_REQUEST_FAILED]: gettComplaintsRequestFailedResolver,
  [RAISE_COMPLAINT_REQUEST_MADE]: raiseComplaintRequestMadeResolver,
  [RAISE_COMPLAINT_REQUEST_RESOLVED]: raiseComplaintRequestResolvedResolver,
  [RAISE_COMPLAINT_REQUEST_FAILED]: raiseComplaintRequestFailedResolver,
  [UPDATE_COMPLAINT_REQUEST_MADE]: updateComplaintRequestMadeResolver,
  [UPDATE_COMPLAINT_REQUEST_RESOLVED]: updateComplaintRequestResolvedResolver,
  [UPDATE_COMPLAINT_REQUEST_FAILED]: updateComplaintRequestFailedResolver,
  [RESET_COMPLAINTS_STATE]: resetState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
