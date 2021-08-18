import httpInterceptor from "../network/interceptor";
import { SERVER_URL } from "constant";

const TenantsService = {
  getTenants: async (payload) => {
    const URL = `${SERVER_URL}/api/users/`;
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

  getTenantsByOwner: async (payload) => {
    const URL = `${SERVER_URL}/api/users/owner/`;
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

  updateTenant: async (id) => {
    const URL = `${SERVER_URL}/api/users/${id}`;
    const response = await httpInterceptor({
      url: URL,
      method: "DELETE",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },

  addTenant: async (payload) => {
    const URL = `${SERVER_URL}/api/users`;
    const response = await httpInterceptor({
      url: URL,
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response);
  },
};
export default TenantsService;
