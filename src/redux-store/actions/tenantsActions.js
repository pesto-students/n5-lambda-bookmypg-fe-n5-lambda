import { action } from "typesafe-actions";
import {
  GET_TENANTS_REQUEST_MADE,
  GET_TENANTS_REQUEST_RESOLVED,
  GET_TENANTS_REQUEST_FAILED,
  RESET_TENANTS_STATE,
  GET_TENANTS_BY_OWNER_REQUEST_MADE,
  GET_TENANTS_BY_OWNER_REQUEST_RESOLVED,
  GET_TENANTS_BY_OWNER_REQUEST_FAILED,
  UPDATE_TENANT_REQUEST_MADE,
  UPDATE_TENANT_REQUEST_RESOLVED,
  UPDATE_TENANT_REQUEST_FAILED,
  ADD_TENANT_REQUEST_MADE,
  ADD_TENANT_REQUEST_RESOLVED,
  ADD_TENANT_REQUEST_FAILED,
} from "../../constant";

export default {
  getTenants: (payload) => action(GET_TENANTS_REQUEST_MADE, payload),
  tenantsReceived: (payload) => action(GET_TENANTS_REQUEST_RESOLVED, payload),
  getTenantsFailed: (payload) => action(GET_TENANTS_REQUEST_FAILED, payload),
  resetState: (payload) => action(RESET_TENANTS_STATE, payload),

  getTenantsByOwner: (payload) => action(GET_TENANTS_BY_OWNER_REQUEST_MADE, payload),
  tenantsByOwnerReceived: (payload) => action(GET_TENANTS_BY_OWNER_REQUEST_RESOLVED, payload),
  getTenantsByOwnerFailed: (payload) => action(GET_TENANTS_BY_OWNER_REQUEST_FAILED, payload),

  updateTenant: (payload) => action(UPDATE_TENANT_REQUEST_MADE, payload),
  tenantUpdated: (payload) => action(UPDATE_TENANT_REQUEST_RESOLVED, payload),
  updateTenantFailed: (payload) =>
    action(UPDATE_TENANT_REQUEST_FAILED, payload),

  addTenant: (payload) => action(ADD_TENANT_REQUEST_MADE, payload),
  tenantAdded: (payload) => action(ADD_TENANT_REQUEST_RESOLVED, payload),
  addTenantFailed: (payload) => action(ADD_TENANT_REQUEST_FAILED, payload),
};
