export const PropertiesSelector = (state) => ({
  getPropertiesData: () => {
    return {
      data:
        state && state.properties && state.properties.data
          ? state.properties.data
          : {},
    };
  },
  getuserRequestState: () => {
    return state.getPropertiesRequestState || {};
  },
});

export default PropertiesSelector;
