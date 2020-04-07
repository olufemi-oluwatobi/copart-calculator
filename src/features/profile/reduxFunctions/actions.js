import {
  makePostRequest,
  makeGetRequestToNodeService,
  makePostRequestToNodeService,
  makePutRequest
} from "./api";
import PROFILE_ACTIONS from "./constants";

const actionSuccess = (actionType, payload) => ({
  type: PROFILE_ACTIONS[`${actionType}Success`],
  payload
});

const actionError = (actionType, payload) => ({
  type: PROFILE_ACTIONS[`${actionType}Error`],
  payload
});

const actionRequest = (actionType, payload) => ({
  type: PROFILE_ACTIONS[`${actionType}Requested`],
  payload
});

export const updateProfile = (requestObject, id) => {
  const actionType = "updateProfile";
  return async dispatch => {
    try {
      dispatch(actionRequest(actionType));

      const { status, data, error } = await makePutRequest(
        `api/Account/UpdateUser?id=${id}`,
        requestObject
      );
      if (status !== 200) {
        dispatch(actionError(actionType, error));
      }

      dispatch(actionSuccess(actionType, data));
    } catch (error) {
      if (error.response) {
        return dispatch(actionError(actionType, error.response.data.Message));
      } else if (error.request) {
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};

export const getWorkInformation = userId => {
  const actionType = "getWorkInformation";
  return async dispatch => {
    try {
      dispatch(actionRequest(actionType));

      const { status, data, error } = await makeGetRequestToNodeService(
        `workInformation/userWorkInformation/${userId}`
      );
      if (status !== 200) {
        dispatch(actionError(actionType, error));
      }

      dispatch(actionSuccess(actionType, data.data));
    } catch (error) {
      if (error.response) {
        return dispatch(actionError(actionType, error.response.data.Message));
      } else if (error.request) {
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};

const appendKeyIfMissingInArrayOfObject = (array, key, value) => {
  return array.map(obj => {
    if (!obj[key]) {
      obj[key] = value;
    }
    return obj;
  });
};
export const updateWorkInformation = (userId, requestArray) => {
  const actionType = "modifyWorkInformation";
  return async dispatch => {
    try {
      dispatch(actionRequest(actionType));

      const requestData = appendKeyIfMissingInArrayOfObject(
        requestArray,
        "UserId",
        userId
      );
      console.log(userId, requestData);
      const { status, data, error } = await makePostRequestToNodeService(
        `workInformation/modifyWorkInformation`,
        requestData
      );
      if (status !== 200) {
        dispatch(actionError(actionType, error));
      }

      dispatch(actionSuccess(actionType, data.data));
    } catch (error) {
      if (error.response) {
        return dispatch(actionError(actionType, error.response.data.Message));
      } else if (error.request) {
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};

export const uploadDocument = (id, requestObject) => {
  const actionType = "uploadDocument";
  return async dispatch => {
    try {
      dispatch(actionRequest(actionType));

      const { status, data, error } = await makePostRequest(
        `api/avature/UploadDocuments?id=${id}`,
        requestObject
      );
      if (status !== 200) {
        dispatch(actionError(actionType, error));
      }
      dispatch(actionSuccess(actionType, data));
    } catch (error) {
      if (error.response) {
        return dispatch(actionError(actionType, error.response.data.Message));
      } else if (error.request) {
        return dispatch(actionError(actionType, error.response.data.Message));
      } else {
        return dispatch(actionError(actionType, error.response.data.Message));

        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};
