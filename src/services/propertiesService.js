import httpInterceptor from "../network/interceptor";

const PropertiesService = {
  getProperties: async (payload) => {
    const URL = "http://localhost:4000/api/properties";
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
