import { combineReducers } from "redux";
import UserReducer from "./reducers/userReducer";
import PropertiesReducer from "./reducers/propertiesReducer";
import TenantsReducer from "./reducers/tenantsReducer";
import AmenitiesReducer from "./reducers/amenitiesReducer";
import ComplaintsReducer from "./reducers/complaintsReducer";
import LocationsReducer from "./reducers/locationsReducer";
import PaymentsReducer from "./reducers/paymentsReducer";

export default combineReducers({
  user: UserReducer,
  properties: PropertiesReducer,
  tenants: TenantsReducer,
  amenities: AmenitiesReducer,
  complaints: ComplaintsReducer,
  locations: LocationsReducer,
  payments: PaymentsReducer,
});
