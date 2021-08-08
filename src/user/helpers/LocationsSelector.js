export const LocationsSelector = (state) => ({
  getLocationsData: () => {
    return {
      data:
        state && state.locations && state.locations.data
          ? state.locations.data
          : {},
    };
  },
  getLocationsRequestState: () => {
    return state.getLocationsRequestState || {};
  },
});

export default LocationsSelector;
