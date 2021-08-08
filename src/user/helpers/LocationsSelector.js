export const LocationsSelector = (state) => ({
  getLocationsData: () => {
    return {
      data:
        state && state.locations && state.locations.data
          ? state.locations.data
          : {},
    };
  },
  getSelectedLocation: () => {
      return {
        selectedLocation:
          state && state.selectedLocation
            ? state.selectedLocation
            : {},
      };
  },
  getLocationsRequestState: () => {
    return state.getLocationsRequestState || {};
  },
});

export default LocationsSelector;
