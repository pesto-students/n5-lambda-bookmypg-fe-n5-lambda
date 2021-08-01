import UserService from "./userService";
import PropertiesService from "./propertiesService";

const AppService = {
  user: UserService,
  properties: PropertiesService,
};

export default AppService;
