import {
  GET_PROPERTIES_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_RESOLVED,
  GET_PROPERTIES_REQUEST_FAILED,
  RESET_PROPERTIES_STATE,
  GET_PROPERTIES_BY_OWNER_REQUEST_MADE,
  GET_PROPERTIES_BY_OWNER_REQUEST_RESOLVED,
  GET_PROPERTIES_BY_OWNER_REQUEST_FAILED,
  GET_LATEST_PROPERTIES_REQUEST_MADE,
  GET_LATEST_PROPERTIES_REQUEST_RESOLVED,
  GET_LATEST_PROPERTIES_REQUEST_FAILED,
  RESET_LATEST_PROPERTIES_STATE,
  ADD_PROPERTY_REQUEST_MADE,
  ADD_PROPERTY_REQUEST_RESOLVED,
  ADD_PROPERTY_REQUEST_FAILED,
  UPDATE_PROPERTY_REQUEST_MADE,
  UPDATE_PROPERTY_REQUEST_RESOLVED,
  UPDATE_PROPERTY_REQUEST_FAILED,
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

const getPropertiesByOwnerRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getPropertiesByOwnerRequestState: {
      ...requestState.processing,
    },
  };
};

const getPropertiesByOwnerRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    getPropertiesByOwnerRequestState: {
      ...requestState.resolved,
    },
    properties: payload,
  };
};

const getPropertiesByOwnerRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    getPropertiesByOwnerRequestState: {
      ...requestState.failed,
    },
    ...payload,
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


const addPropertyRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    addPropertyRequestState: {
      ...requestState.processing,
    },
  };
};

const addPropertyRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    addPropertyRequestState: {
      ...requestState.resolved,
    },
  };
};

const addPropertyRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    addPropertyRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const updatePropertyRequestMadeResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updatePropertyRequestState: {
      ...requestState.processing,
    },
  };
};

const updatePropertyRequestResolvedResolver = (state = {}, payload) => {
  return {
    ...state,
    updatePropertyRequestState: {
      ...requestState.resolved,
    },
  };
};

const updatePropertyRequestFailedResolver = (state = {}, payload = {}) => {
  return {
    ...state,
    updatePropertyRequestState: {
      ...requestState.failed,
    },
    ...payload,
  };
};

const actionToResolverMap = {
  [GET_PROPERTIES_REQUEST_MADE]: getPropertiesRequestMadeResolver,
  [GET_PROPERTIES_REQUEST_RESOLVED]: getPropertiesRequestResolvedResolver,
  [GET_PROPERTIES_REQUEST_FAILED]: getPropertiesRequestFailedResolver,
  [RESET_PROPERTIES_STATE]: resetState,
  [GET_PROPERTIES_BY_OWNER_REQUEST_MADE]:
    getPropertiesByOwnerRequestMadeResolver,
  [GET_PROPERTIES_BY_OWNER_REQUEST_RESOLVED]:
    getPropertiesByOwnerRequestResolvedResolver,
  [GET_PROPERTIES_BY_OWNER_REQUEST_FAILED]:
    getPropertiesByOwnerRequestFailedResolver,
  [GET_LATEST_PROPERTIES_REQUEST_MADE]: getLatestPropertiesRequestMadeResolver,
  [GET_LATEST_PROPERTIES_REQUEST_RESOLVED]:
    getLatestPropertiesRequestResolvedResolver,
  [GET_LATEST_PROPERTIES_REQUEST_FAILED]:
    getLatestPropertiesRequestFailedResolver,
  [RESET_LATEST_PROPERTIES_STATE]: resetLatestPropertiesState,
  [ADD_PROPERTY_REQUEST_MADE]: addPropertyRequestMadeResolver,
  [ADD_PROPERTY_REQUEST_RESOLVED]: addPropertyRequestResolvedResolver,
  [ADD_PROPERTY_REQUEST_FAILED]: addPropertyRequestFailedResolver,
  [UPDATE_PROPERTY_REQUEST_MADE]: updatePropertyRequestMadeResolver,
  [UPDATE_PROPERTY_REQUEST_RESOLVED]: updatePropertyRequestResolvedResolver,
  [UPDATE_PROPERTY_REQUEST_FAILED]: updatePropertyRequestFailedResolver,
};

export default (state = {}, action = {}) => {
  const resolver = actionToResolverMap[action.type];
  return (resolver && resolver(state, action.payload)) || state;
};
