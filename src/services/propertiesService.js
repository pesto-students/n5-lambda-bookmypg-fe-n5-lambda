import httpInterceptor from "../network/interceptor";
import { SERVER_URL } from "constant";

const PropertiesService = {
  getProperties: async (payload) => {
    const URL = `${SERVER_URL}/api/properties`;
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

  getPropertiesByOwner: async (payload) => {
    const URL = `${SERVER_URL}/api/properties/owner/`;
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

  getLatestProperties: async () => {
    const response = await httpInterceptor({
      url: `${SERVER_URL}/api/properties?pagenumber=0&countperpage=10&columnname=createdAt&orderby=dsc`,
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },

  addProperty: async (payload) => {
    const URL = `${SERVER_URL}/api/properties/`;
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

  updateProperty: async (payload) => {
    const URL = `${SERVER_URL}/api/properties/${payload.id}`;
    const response = await httpInterceptor({
      url: URL,
      method: "DELETE",
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
};
export default PropertiesService;
