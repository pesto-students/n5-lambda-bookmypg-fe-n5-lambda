import httpInterceptor from "../network/interceptor";

const PropertiesService = {
  getProperties: async (payload) => {
    const URL =
      "http://bookmypglambdabackend-env.eba-pxbzun3k.us-east-2.elasticbeanstalk.com/api/properties";
    const response = await httpInterceptor({
      url: `${URL}${payload && payload.extraParams ? payload.extraParams : ""}`,
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },
};
export default PropertiesService;
