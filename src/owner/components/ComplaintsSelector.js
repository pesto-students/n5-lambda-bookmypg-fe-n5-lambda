export const ComplaintsSelector = (state) => ({
  getComplaintsData: () => {
    return {
      data:
        state && state.complaints && state.complaints.data
          ? state.complaints.data
          : {},
    };
  },
  getComplaintsCount: () => {
    return {
      count:
        state && state.complaints && state.complaints.data
          ? state.complaints.total_count
          : {},
    };
  },
  getComplaintsRequestState: () => {
    return state.getComplaintsRequestState || {};
  },
});

export default ComplaintsSelector;
