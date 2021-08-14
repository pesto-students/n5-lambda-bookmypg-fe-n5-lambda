import { all, takeLatest } from "redux-saga/effects";
import {
  GET_USER_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_MADE,
  GET_TENANTS_REQUEST_MADE,
  UPDATE_TENANT_REQUEST_MADE,
  ADD_TENANT_REQUEST_MADE,
  GET_AMENITIES_REQUEST_MADE,
  UPDATE_AMENITY_REQUEST_MADE,
  GET_COMPLAINTS_REQUEST_MADE,
  GET_LOCATIONS_REQUEST_MADE,
  GET_LATEST_PROPERTIES_REQUEST_MADE,
} from "../../constant";
import { getUserSaga } from "./userSaga";
import { getPropertiesSaga, getLatestPropertiesSaga } from "./propertiesSaga";
import { getTenantsSaga, updateTenantSaga, addTenantSaga } from "./tenantsSaga";
import { getAmenitiesSaga, updateAmenitySaga } from "./amenitiesSaga";
import { getComplaintsSaga } from "./complaintsSaga";
import { getLocationsSaga } from "./locationsSaga";

import AppService from "../../services/index";

const userpApi = AppService.user;
const propertiesApi = AppService.properties;
const tenantsApi = AppService.tenants;
const amenitiesApi = AppService.amenities;
const complaintsApi = AppService.complaints;
const locationsApi = AppService.locations;

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PROPERTIES_REQUEST_MADE, getPropertiesSaga, propertiesApi),
    takeLatest(GET_LATEST_PROPERTIES_REQUEST_MADE, getLatestPropertiesSaga, propertiesApi),
    takeLatest(GET_TENANTS_REQUEST_MADE, getTenantsSaga, tenantsApi),
    takeLatest(UPDATE_TENANT_REQUEST_MADE, updateTenantSaga, tenantsApi),
    takeLatest(ADD_TENANT_REQUEST_MADE, addTenantSaga, tenantsApi),
    takeLatest(GET_AMENITIES_REQUEST_MADE, getAmenitiesSaga, amenitiesApi),
    takeLatest(UPDATE_AMENITY_REQUEST_MADE, updateAmenitySaga, amenitiesApi),
    takeLatest(GET_COMPLAINTS_REQUEST_MADE, getComplaintsSaga, complaintsApi),
    takeLatest(GET_LOCATIONS_REQUEST_MADE, getLocationsSaga, locationsApi),
    takeLatest(GET_USER_REQUEST_MADE, getUserSaga, userpApi),
  ]);
}
