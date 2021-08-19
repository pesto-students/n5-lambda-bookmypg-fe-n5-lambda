import { call, put } from "redux-saga/effects";
import _ from "lodash";

import paymentsActions from "../actions/paymentsActions";

export function* getPaymentsSaga(paymentsApi, action) {
  try {
    const response = yield call(paymentsApi.getPayments, action.payload);
    yield put(paymentsActions.paymentsReceived(response));
  } catch (e) {
    yield put(
      paymentsActions.getPaymentsFailed({
        message: e.message,
      })
    );
  }
}
