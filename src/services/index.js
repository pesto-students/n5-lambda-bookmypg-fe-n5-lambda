import UserService from "./userService";
import PropertiesService from "./propertiesService";
import TenantsService from "./tenantsService";
import ComplaintsService from "./complaintsService";
import LocationsService from "./locationsService";

const AppService = {
  user: UserService,
  properties: PropertiesService,
  tenants: TenantsService,
  complaints: ComplaintsService,
  locations: LocationsService
};

export default AppService;
