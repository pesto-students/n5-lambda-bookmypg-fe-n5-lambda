export const AmenitiesSelector = (state) => ({
  getAmenitiesData: () => {
    return {
      data:
        state && state.amenities && state.amenities.data
          ? state.amenities.data
          : {},
    };
  },
  getAmenitiesRequestState: () => {
    return state.getAmenitiesRequestState || {};
  },

  addAmenityRequestState: () => {
    return state.addAmenityRequestState || {};
  },
});

export default AmenitiesSelector;
