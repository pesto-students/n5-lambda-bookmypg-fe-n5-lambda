export const PropertiesSelector = (state) => ({
  getPropertiesData: () => {
    return {
      data:
        state && state.properties && state.properties.data
          ? state.properties.data
          : {},
    };
  },

  getLatestPropertiesData: () => {
    return {
      data:
        state && state.latestProperties && state.latestProperties.data
          ? state.latestProperties.data
          : {},
    };
  },

  getPropertiesRequestState: () => {
    return state.getPropertiesRequestState || {};
  },

  getLatestPropertiesRequestState: () => {
    return state.getLatestPropertiesRequestState || {};
  },
});

export default PropertiesSelector;
