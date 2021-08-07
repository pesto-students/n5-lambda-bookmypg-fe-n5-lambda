import httpInterceptor from "../network/interceptor";

const PropertiesService = {
  getProperties: async () => {
    const URL = "http://localhost:4000/api/property/";
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
export default PropertiesService;
