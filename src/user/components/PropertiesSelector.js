export const PropertiesSelector = (state) => ({
  getPropertiesData: () => {
    console.log("INSIDE SELECTOR state", state);
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
