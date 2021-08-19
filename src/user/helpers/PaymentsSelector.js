export const PaymentsSelector = (state) => ({
  getPaymentsData: () => {
    return {
      data:
        state && state.payments && state.payments.data
          ? state.payments.data
          : {},
    };
  },

  getPaymentsCount: () => {
    return {
      count:
        state && state.payments && state.payments.data
          ? state.payments.total_count
          : {},
    };
  },
});

export default PaymentsSelector;
