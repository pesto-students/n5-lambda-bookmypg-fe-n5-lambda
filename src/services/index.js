import UserService from "./userService";
import PropertiesService from "./propertiesService";
import TenantsService from "./tenantsService";

const AppService = {
  user: UserService,
  properties: PropertiesService,
  tenants: TenantsService,
};

export default AppService;
