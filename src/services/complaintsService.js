import httpInterceptor from "../network/interceptor";

const ComplaintsService = {
  getComplaints: async (payload) => {
    const URL = "http://localhost:4000/api/complaints/owner/";
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
export default ComplaintsService;
