import {
  generalHttpRequest,
  makeHttpRequest,
  makeSpecialGet
} from "../../helpers/httpHelpers";
import baseUrl from "../baseUrl";
/**
 *
 * @param {String} url
 * @param {Object} data
 */
export const makePostRequest = (url, data, params) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "POST", params || {});

export const parseCv = data =>
  makeHttpRequest("http://localhost:2000/execute-scripts", data, "POST", {});

export const makeGetRequest = (url, params) =>
  makeHttpRequest(`${baseUrl}${url}`, {}, "GET", params);

export const getUserAccessToken = url => {
  return makeSpecialGet(`${baseUrl}${url}`);
};

export const makePutRequest = (url, data) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "PUT", {});
