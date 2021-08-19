import { action } from "typesafe-actions";
import {
  GET_PAYMENTS_REQUEST_MADE,
  GET_PAYMENTS_REQUEST_RESOLVED,
  GET_PAYMENTS_REQUEST_FAILED,
  RESET_PAYMENTS_STATE,
} from "../../constant";

export default {
  getPayments: (payload) => action(GET_PAYMENTS_REQUEST_MADE, payload),
  paymentsReceived: (payload) =>
    action(GET_PAYMENTS_REQUEST_RESOLVED, payload),
  getPaymentsFailed: (payload) =>
    action(GET_PAYMENTS_REQUEST_FAILED, payload),
  resetState: (payload) => action(RESET_PAYMENTS_STATE, payload),
};
