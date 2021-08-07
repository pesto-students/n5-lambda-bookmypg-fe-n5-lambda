import UserService from "./userService";
import PropertiesService from "./propertiesService";
import TenantsService from "./tenantsService";
import ComplaintsService from "./complaintsService";

const AppService = {
  user: UserService,
  properties: PropertiesService,
  tenants: TenantsService,
  complaints: ComplaintsService,
};

export default AppService;
