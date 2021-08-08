import httpInterceptor from "../network/interceptor";

const ComplaintsService = {
  getComplaints: async () => {
    const URL =
      "http://bookmypglambdabackend-env.eba-pxbzun3k.us-east-2.elasticbeanstalk.com/api/complaints/";
    const response = await httpInterceptor({
      url: URL,
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },
};
export default ComplaintsService;
