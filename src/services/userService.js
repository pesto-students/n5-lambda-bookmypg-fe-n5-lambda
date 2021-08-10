import httpInterceptor from '../network/interceptor';

const UserService = {
  getUser: async (email) => {
    const URL = `http://localhost:4000/api/users/user/${email}`;
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
};
export default UserService;
