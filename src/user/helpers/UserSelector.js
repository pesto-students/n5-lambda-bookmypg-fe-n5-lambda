export const UserSelector = (state) => ({
  getUserData: () => {
    return {
      data: state && state.user && state.user.data ? state.user.data : {},
    };
  },
  submitUserRequestState: () => {
    return state.submitUserRequestState || {};
  },
});

export default UserSelector;
