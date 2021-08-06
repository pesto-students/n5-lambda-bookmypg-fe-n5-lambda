import httpInterceptor from "../network/interceptor";

const PropertiesService = {
  getProperties: async () => {
    console.log("INSIDE SERVICE");
    const URL = "http://localhost:4000/api/property/";
    const response = await httpInterceptor({
      url: URL,
      method: "GET",
    });
    console.log("INSIDE SERVICE response", response);

    if (response.ok) {
      const data = await response.json();
      console.log("INSIDE SERVICE", data);
      return data;
    }
    throw new Error(response);
  },
};
export default PropertiesService;
