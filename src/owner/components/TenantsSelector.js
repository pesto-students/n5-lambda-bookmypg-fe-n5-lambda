export const TenantsSelector = (state) => ({
  getTenantsData: () => {
    return {
      data:
        state && state.tenants && state.tenants.data ? state.tenants.data : {},
    };
  },
  getTenantsCount: () => {
    return {
      count:
        state && state.tenants && state.tenants.data ? state.tenants.total_count : {},
    };
  },
  getTenantsRequestState: () => {
    return state.getTenantsRequestState || {};
  },
  getTenantsByOwnerRequestState: () => {
    return state.getTenantsByOwnerRequestState || {};
  },
});

export default TenantsSelector;
