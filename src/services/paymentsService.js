import httpInterceptor from "../network/interceptor";
import { SERVER_URL } from "constant";

const PaymentsService = {
  getPayments: async (payload) => {
    const URL = `${SERVER_URL}/api/payments/tenant/`;
    const response = await httpInterceptor({
      url: `${URL}${payload && payload.extraParams ? payload.extraParams : ""}`,
      method: "GET",
      headers: {
        "x-auth-token": payload.user.token,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },

};
export default PaymentsService;
