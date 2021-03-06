import { all, takeLatest } from "redux-saga/effects";
import {
  GET_USER_REQUEST_MADE,
  GET_PROPERTIES_REQUEST_MADE,
  GET_PROPERTIES_BY_OWNER_REQUEST_MADE,
  GET_TENANTS_REQUEST_MADE,
  GET_TENANTS_BY_OWNER_REQUEST_MADE,
  UPDATE_TENANT_REQUEST_MADE,
  ADD_TENANT_REQUEST_MADE,
  GET_AMENITIES_REQUEST_MADE,
  UPDATE_AMENITY_REQUEST_MADE,
  ADD_AMENITY_REQUEST_MADE,
  GET_COMPLAINTS_REQUEST_MADE,
  GET_PAYMENTS_REQUEST_MADE,
  RAISE_COMPLAINT_REQUEST_MADE,
  GET_LOCATIONS_REQUEST_MADE,
  GET_LATEST_PROPERTIES_REQUEST_MADE,
  ADD_PROPERTY_REQUEST_MADE,
  UPDATE_USER_REQUEST_MADE,
  UPDATE_PROPERTY_REQUEST_MADE,
  UPDATE_COMPLAINT_REQUEST_MADE,
} from "../../constant";
import { getUserSaga, updateUserSaga } from "./userSaga";
import {
  getPropertiesSaga,
  getPropertiesByOwnerSaga,
  getLatestPropertiesSaga,
  addPropertySaga,
  updatePropertySaga
} from "./propertiesSaga";
import { getTenantsSaga, getTenantsByOwnerSaga, updateTenantSaga, addTenantSaga } from "./tenantsSaga";
import { getAmenitiesSaga, addAmenitySaga, updateAmenitySaga} from "./amenitiesSaga";
import { getComplaintsSaga, raiseComplaintSaga, updateComplaintSaga } from "./complaintsSaga";
import { getLocationsSaga } from "./locationsSaga";
import { getPaymentsSaga } from "./paymentsSaga";

import AppService from "../../services/index";

const userpApi = AppService.user;
const propertiesApi = AppService.properties;
const tenantsApi = AppService.tenants;
const amenitiesApi = AppService.amenities;
const complaintsApi = AppService.complaints;
const paymentsApi = AppService.payments;
const locationsApi = AppService.locations;

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PROPERTIES_REQUEST_MADE, getPropertiesSaga, propertiesApi),
    takeLatest(GET_PROPERTIES_BY_OWNER_REQUEST_MADE, getPropertiesByOwnerSaga, propertiesApi),
    takeLatest(GET_LATEST_PROPERTIES_REQUEST_MADE, getLatestPropertiesSaga, propertiesApi),
    takeLatest(ADD_PROPERTY_REQUEST_MADE, addPropertySaga, propertiesApi),
    takeLatest(UPDATE_PROPERTY_REQUEST_MADE, updatePropertySaga, propertiesApi),
    takeLatest(GET_TENANTS_REQUEST_MADE, getTenantsSaga, tenantsApi),
    takeLatest(GET_TENANTS_BY_OWNER_REQUEST_MADE, getTenantsByOwnerSaga, tenantsApi),
    takeLatest(UPDATE_TENANT_REQUEST_MADE, updateTenantSaga, tenantsApi),
    takeLatest(ADD_TENANT_REQUEST_MADE, addTenantSaga, tenantsApi),
    takeLatest(GET_AMENITIES_REQUEST_MADE, getAmenitiesSaga, amenitiesApi),
    takeLatest(ADD_AMENITY_REQUEST_MADE, addAmenitySaga, amenitiesApi),
    takeLatest(UPDATE_AMENITY_REQUEST_MADE, updateAmenitySaga, amenitiesApi),
    takeLatest(GET_COMPLAINTS_REQUEST_MADE, getComplaintsSaga, complaintsApi),
    takeLatest(GET_PAYMENTS_REQUEST_MADE, getPaymentsSaga, paymentsApi),
    takeLatest(RAISE_COMPLAINT_REQUEST_MADE, raiseComplaintSaga, complaintsApi),
    takeLatest(UPDATE_COMPLAINT_REQUEST_MADE, updateComplaintSaga, complaintsApi),
    takeLatest(GET_LOCATIONS_REQUEST_MADE, getLocationsSaga, locationsApi),
    takeLatest(GET_USER_REQUEST_MADE, getUserSaga, userpApi),
    takeLatest(UPDATE_USER_REQUEST_MADE, updateUserSaga, userpApi),
  ]);
}
