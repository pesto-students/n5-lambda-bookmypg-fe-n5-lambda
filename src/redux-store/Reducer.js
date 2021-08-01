import { combineReducers } from "redux";
import UserReducer from "./reducers/userReducer";
import PropertiesReducer from "./reducers/propertiesReducer";

export default combineReducers({
  user: UserReducer,
  properties: PropertiesReducer,
});
