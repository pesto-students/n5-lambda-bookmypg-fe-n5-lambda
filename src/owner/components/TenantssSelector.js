export const TenantsSelector = (state) => ({
  getTenantsData: () => {
    return {
      data:
        state && state.tenants && state.tenants.data ? state.tenants.data : {},
    };
  },
  getuserRequestState: () => {
    return state.getTenantsRequestState || {};
  },
});

export default TenantsSelector;
