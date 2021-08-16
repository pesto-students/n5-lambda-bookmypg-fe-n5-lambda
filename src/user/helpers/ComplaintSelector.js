export const ComplaintsSelector = (state) => ({
  getComplaintsData: () => {
    return {
      data:
        state && state.complaints && state.complaints.data
          ? state.complaints.data
          : {},
    };
  }
});

export default ComplaintsSelector;
