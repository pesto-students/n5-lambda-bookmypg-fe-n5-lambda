import httpInterceptor from "../network/interceptor";

const ComplaintsService = {
  getComplaints: async (user) => {
    const URL = "http://localhost:4000/api/complaints/";
    const response = await httpInterceptor({
      url: URL,
      method: "GET",
      headers: {
        "x-auth-token": user.token,
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
