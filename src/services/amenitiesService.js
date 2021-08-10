import httpInterceptor from "../network/interceptor";

const AmenitiesService = {
  getAmenities: async (user) => {
    const URL = "http://localhost:4000/api/amenities/";
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

  updateAmenity: async (payload) => {
    const URL = `http://localhost:4000/api/amenities/${payload.id}`;
    const response = await httpInterceptor({
      url: URL,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
export default AmenitiesService;
