export const UserSelector = (state) => ({
  getUserData: () => {
    return {
      data: state && state.user ? state.user : {},
    };
  },
  submitUserRequestState: () => {
    return state.submitUserRequestState || {};
  },
});

export default UserSelector;
