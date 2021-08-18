import { call, put } from "redux-saga/effects";
import _ from "lodash";

import tenantsActions from "../actions/tenantsActions";

export function* getTenantsSaga(tenantsApi, action) {
  try {
    const response = yield call(tenantsApi.getTenants, action.payload);
    yield put(tenantsActions.tenantsReceived(response));
  } catch (e) {
    yield put(
      tenantsActions.getTenantsFailed({
        message: e.message,
      })
    );
  }
}

export function* getTenantsByOwnerSaga(tenantsApi, action) {
  try {
    const response = yield call(tenantsApi.getTenantsByOwner, action.payload);
    yield put(tenantsActions.tenantsByOwnerReceived(response));
  } catch (e) {
    yield put(
      tenantsActions.getTenantsByOwnerFailed({
        message: e.message,
      })
    );
  }
}

export function* updateTenantSaga(tenantsApi, action) {
  try {
    const response = yield call(tenantsApi.updateTenant, action.payload);
    yield put(tenantsActions.tenantUpdated(response));
  } catch (e) {
    yield put(
      tenantsActions.updateTenantFailed({
        message: e.message,
      })
    );
  }
}

export function* addTenantSaga(tenantsApi, action) {
  try {

    console.log("tenantSaga===");
    const response = yield call(tenantsApi.addTenant, action.payload);
    console.log("response", response);
    yield put(tenantsActions.tenantAdded(response));
  } catch (e) {
    yield put(
      tenantsActions.addTenantFailed({
        message: e.message,
      })
    );
  }
}