import httpInterceptor from "../network/interceptor";

const TenantsService = {
  getTenants: async (payload) => {
    const URL = "http://localhost:4000/api/users/";
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
    const URL = `http://localhost:4000/api/users/${id}`;
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
};
export default TenantsService;
