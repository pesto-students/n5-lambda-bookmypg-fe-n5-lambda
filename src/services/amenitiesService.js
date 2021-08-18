import httpInterceptor from "../network/interceptor";

const AmenitiesService = {
  getAmenities: async (payload) => {
    const URL = "http://localhost:4000/api/amenities";
    const response = await httpInterceptor({
      url: `${URL}${payload && payload.extraParams ? payload.extraParams : ""}`,
      method: "GET",
      headers: {
        "x-auth-token": payload.user.token,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },

  addAmenity: async (payload) => {
    const URL = `http://localhost:4000/api/amenities/`;
    const response = await httpInterceptor({
      url: URL,
      method: "POST",
      body: JSON.stringify(payload.params),
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
