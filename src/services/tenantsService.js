import httpInterceptor from "../network/interceptor";

const TenantsService = {
  getTenants: async () => {
    const URL =
      "http://bookmypglambdabackend-env.eba-pxbzun3k.us-east-2.elasticbeanstalk.com/api/users/";
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

  updateTenant: async (id) => {
    const URL = `http://bookmypglambdabackend-env.eba-pxbzun3k.us-east-2.elasticbeanstalk.com/api/users/${id}`;
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
