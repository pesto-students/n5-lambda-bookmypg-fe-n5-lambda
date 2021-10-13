export const PropertiesSelector = (state) => ({
  getPropertiesData: () => {
    return {
      data:
        state && state.properties && state.properties.data
          ? state.properties.data
          : {},
    };
  },

  getPropertiesCount: () => {
    return {
      count:
        state && state.properties && state.properties.data
          ? state.properties.total_count
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

  getPropertiesByOwnerRequestState: () => {
    return state.getPropertiesByOwnerRequestState || {};
  },

  getLatestPropertiesRequestState: () => {
    return state.getLatestPropertiesRequestState || {};
  },
});

export default PropertiesSelector;
