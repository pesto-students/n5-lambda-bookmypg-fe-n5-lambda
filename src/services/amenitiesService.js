import httpInterceptor from "../network/interceptor";

const AmenitiesService = {
  getAmenities: async () => {
    const URL = "http://localhost:4000/api/amenities/";
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

  updateAmenity: async (id) => {
    const URL = `http://localhost:4000/api/amenities/${id}`;
    const response = await httpInterceptor({
      url: URL,
      method: "PUT",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },
};
export default AmenitiesService;
