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
