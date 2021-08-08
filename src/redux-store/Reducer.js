import { combineReducers } from "redux";
import UserReducer from "./reducers/userReducer";
import PropertiesReducer from "./reducers/propertiesReducer";
import TenantsReducer from "./reducers/tenantsReducer";
import ComplaintsReducer from "./reducers/complaintsReducer";
import LocationsReducer from "./reducers/locationsReducer";

export default combineReducers({
  user: UserReducer,
  properties: PropertiesReducer,
  tenants: TenantsReducer,
  complaints: ComplaintsReducer,
  locations: LocationsReducer,
});
