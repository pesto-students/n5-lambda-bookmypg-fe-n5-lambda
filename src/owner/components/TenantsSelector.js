export const TenantsSelector = (state) => ({
  getTenantsData: () => {
    return {
      data:
        state && state.tenants && state.tenants.data ? state.tenants.data : {},
    };
  },
  getTenantsRequestState: () => {
    return state.getTenantsRequestState || {};
  },
});

export default TenantsSelector;
