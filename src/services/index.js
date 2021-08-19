import UserService from "./userService";
import PropertiesService from "./propertiesService";
import TenantsService from "./tenantsService";
import AmenitiesService from "./amenitiesService";
import ComplaintsService from "./complaintsService";
import LocationsService from "./locationsService";
import PaymentsService from "./paymentsService";

const AppService = {
  user: UserService,
  properties: PropertiesService,
  tenants: TenantsService,
  complaints: ComplaintsService,
  locations: LocationsService,
  amenities: AmenitiesService,
  payments: PaymentsService
};

export default AppService;
