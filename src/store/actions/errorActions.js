import { string } from "prop-types";
import { httpGetDashboards } from "../../api.http";

export const setErrorAction = (payload) => ({
  type: "error/setError",
  payload: payload,
});

export const setErrorMessageAction = (payload) => ({
  type: "error/setErrorMessage",
  payload: payload,
});

export const fetchDashboards = (type, payload) => ({
  type: type,
  payload,
});
