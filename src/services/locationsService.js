import httpInterceptor from "../network/interceptor";
import { SERVER_URL } from "constant";

const LocationsService = {
  getLocations: async (payload) => {
    const URL = `${SERVER_URL}/api/locations`;
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
