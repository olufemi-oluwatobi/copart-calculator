import { makeHttpRequest } from "../../../helpers/httpHelpers";
import baseUrl from "../../../config/baseUrl";

const nodeBaseUrl =
  "http://ec2-3-12-103-122.us-east-2.compute.amazonaws.com/avature_node/";
export const makeGetRequest = (url, params) =>
  makeHttpRequest(`${baseUrl}${url}`, {}, "GET", params);

export const makeGetRequestToNodeService = (url, params) =>
  makeHttpRequest(`${nodeBaseUrl}${url}`, {}, "GET", params);

export const makePostRequestToNodeService = (url, data) =>
  makeHttpRequest(`${nodeBaseUrl}${url}`, data, "POST", {});

export const makePostRequest = (url, data) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "POST", {});

export const makePutRequest = (url, data) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "PUT", {});
