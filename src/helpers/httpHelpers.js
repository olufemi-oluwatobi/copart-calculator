import axios from "axios";
// Api request
/**
 *
 * @param {string} url
 * @param {object} data
 * @param {string} method
 * @param {string} contentType
 */
export const generalHttpRequest = (
  url,
  data,
  method,
  params = {},
  contentType
) => {
  return axios({
    url,
    method,
    data,
    params,
    headers: {
      Accept: "application/json, text/plain */*",
      "Content-Type": contentType || "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((res) => res);
};

export const makeSpecialGet = (url = "", data = {}) => {
  let headerData = {};

  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((response) => {
      headerData.status = response.status;
      return response.json();
    })
    .then((data) => {
      return { data, ...headerData };
    }); //.then(response => response.json())// parses JSON response into native Javascript objects
};

/**
 *
 * @param {string} url
 * @param {object} data
 * @param {string} method
 * @param {object} params
 * @param {string} contentType
 */
export const makeHttpRequest = (
  url,
  data,
  method,
  params = {},
  contentType
) => {
  let token = sessionStorage.getItem("authToken");

  return axios({
    url,
    method,
    data,
    params,
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res);
};

const NODE_BASE_URL =
  "http://ec2-3-12-103-122.us-east-2.compute.amazonaws.com/avature_node/";
export const makeHttpRequestToNodeApi = (
  url,
  data,
  method,
  params = {},
  contentType
) => {
  let token = sessionStorage.getItem("authToken");

  return axios({
    url: `${NODE_BASE_URL}${url}`,
    method,
    data,
    params,
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res);
};
