import httpInterceptor from "../network/interceptor";

const LocationsService = {
  getLocations: async (payload) => {
    const URL = "http://localhost:4000/api/locations";
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
export default LocationsService;
