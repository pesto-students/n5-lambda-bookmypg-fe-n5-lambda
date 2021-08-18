import httpInterceptor from "../network/interceptor";
import { SERVER_URL } from "constant";

const UserService = {
  getUser: async (email) => {
    const URL = `${SERVER_URL}/api/users/user/${email}`;
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

  updateUser: async (payload) => {
    const URL = `${SERVER_URL}/api/users/${payload.id}`;
    const response = await httpInterceptor({
      url: URL,
      method: "PUT",
      body: JSON.stringify(payload.params),
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
export default UserService;
