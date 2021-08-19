import {
  GET_PAYMENTS_REQUEST_MADE,
  GET_PAYMENTS_REQUEST_RESOLVED,
  GET_PAYMENTS_REQUEST_FAILED,
  RESET_PAYMENTS_STATE,
} from "../../constant";
import requestState from "../utils/request";

const getPaymentsRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getPaymentsRequestState: {
      ...requestState.processing,
    },
  };
};

const getPaymentsRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getPaymentsRequestState: {
      ...requestState.resolved,
    },
    payments: payload,
  };
};

const gettPaymentsRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    gettPaymentsRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetState = (state = {}) => {
  return {
    ...state,
    gettPaymentsRequestState: {},
    payments: {},
  };
};

const actionToResolverMap = {
  [GET_PAYMENTS_REQUEST_MADE]: getPaymentsRequestMadeResolver,
  [GET_PAYMENTS_REQUEST_RESOLVED]: getPaymentsRequestResolvedResolver,
  [GET_PAYMENTS_REQUEST_FAILED]: gettPaymentsRequestFailedResolver,
  [RESET_PAYMENTS_STATE]: resetState,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
