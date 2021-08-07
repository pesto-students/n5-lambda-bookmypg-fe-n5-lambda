import { combineReducers } from "redux";
import UserReducer from "./reducers/userReducer";
import PropertiesReducer from "./reducers/propertiesReducer";
import TenantsReducer from "./reducers/tenantsReducer";

export default combineReducers({
  user: UserReducer,
  properties: PropertiesReducer,
  tenants: TenantsReducer,
});
