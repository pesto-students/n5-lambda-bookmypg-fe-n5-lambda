import { all, takeLatest } from "redux-saga/effects";
import {
  GET_PROPERTIES_REQUEST_MADE,
  GET_TENANTS_REQUEST_MADE,
  UPDATE_TENANT_REQUEST_MADE,
  GET_COMPLAINTS_REQUEST_MADE,
} from "../../constant";
import { submitGetUserSaga } from "./userSaga";
import { getPropertiesSaga } from "./propertiesSaga";
import { getTenantsSaga, updateTenantSaga } from "./tenantsSaga";
import { getComplaintsSaga } from "./complaintsSaga";
import AppService from "../../services/index";

const userpApi = AppService.user;
const propertiesApi = AppService.properties;
const tenantsApi = AppService.tenants;
const complaintsApi = AppService.complaints;

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PROPERTIES_REQUEST_MADE, getPropertiesSaga, propertiesApi),
    takeLatest(GET_TENANTS_REQUEST_MADE, getTenantsSaga, tenantsApi),
    takeLatest(UPDATE_TENANT_REQUEST_MADE, updateTenantSaga, tenantsApi),
    takeLatest(GET_COMPLAINTS_REQUEST_MADE, getComplaintsSaga, complaintsApi),
  ]);
}
