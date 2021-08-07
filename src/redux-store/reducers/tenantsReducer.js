import {
  GET_TENANTS_REQUEST_MADE,
  GET_TENANTS_REQUEST_RESOLVED,
  GET_TENANTS_REQUEST_FAILED,
  RESET_TENANTS_STATE,
  UPDATE_TENANT_REQUEST_MADE,
  UPDATE_TENANT_REQUEST_RESOLVED,
  UPDATE_TENANT_REQUEST_FAILED,
} from "../../constant";
import requestState from "../utils/request";

const getTenantsRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getTenantsRequestState: {
      ...requestState.processing,
    },
  };
};

const getTenantsRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getTenantsRequestState: {
      ...requestState.resolved,
    },
    tenants: payload,
  };
};

const getTenantsRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getTenantsRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const resetState = (state = {}) => {
  return {
    ...state,
    getTenantsRequestState: {},
    tenants: {},
  };
};

const updateTenantRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updateTenantRequestState: {
      ...requestState.processing,
    },
  };
};

const updateTenantRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    updateTenantRequestState: {
      ...requestState.resolved,
    },
  };
};

const updateTenantRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updateTenantRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const actionToResolverMap = {
  [GET_TENANTS_REQUEST_MADE]: getTenantsRequestMadeResolver,
  [GET_TENANTS_REQUEST_RESOLVED]: getTenantsRequestResolvedResolver,
  [GET_TENANTS_REQUEST_FAILED]: getTenantsRequestFailedResolver,
  [RESET_TENANTS_STATE]: resetState,
  [UPDATE_TENANT_REQUEST_MADE]: updateTenantRequestMadeResolver,
  [UPDATE_TENANT_REQUEST_RESOLVED]: updateTenantRequestResolvedResolver,
  [UPDATE_TENANT_REQUEST_FAILED]: updateTenantRequestFailedResolver,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};