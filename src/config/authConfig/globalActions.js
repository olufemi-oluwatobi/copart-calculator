import GLOBAL_CONSTANTS from "./globalConstants";
import {
  makePostRequest,
  getUserAccessToken,
  makePutRequest,
  makeGetRequest,
  parseCv
} from "./api";
import { parseJwt } from "../../helpers/utils";
import { useDebugValue } from "react";

const globalActionsSuccess = (actionType, payload) => ({
  type: GLOBAL_CONSTANTS[`${actionType}Success`],
  payload
});

const globalActionsRequested = actionType => ({
  type: GLOBAL_CONSTANTS[`${actionType}Requested`]
});

const globalActionsError = (actionType, error) => ({
  type: GLOBAL_CONSTANTS[`${actionType}Error`],
  error
});

// clear error message
export const clearErrorMessage = () => dispatch => {
  const actionType = "clearErrorMessage";
  dispatch(globalActionsSuccess(actionType));
};

// clear success message
export const clearSuccessMessage = () => dispatch => {
  const actionType = "clearSuccessMessage";
  dispatch(globalActionsSuccess(actionType));
};

export const createNotification = (type, message) => dispatch => {
  const actionType = "createNotification";
  dispatch(globalActionsSuccess(actionType, { type, message }));
};

export const displayANewFormView = (newView, option) => dispatch => {
  if (option) {
    option.push(option.path);
  }
  if (newView) {
    const actionType = "displayANewFormView";
    dispatch(globalActionsSuccess(actionType, newView));
  }
};

export const persistUserData = () => {
  console.log("kmdkmdk");
  const userData = localStorage.getItem("userData");
  console.log(userData, typeof userData);
};
// authenticate user

export const registerUser = (data, redirect) => {
  const actionType = "signupUser";

  return async dispatch => {
    try {
      dispatch(globalActionsRequested(actionType));

      let res = await makePostRequest(
        `api/avature/UserRegister`,
        {},
        { username: data.Email, password: data.Password }
      );
      console.log(res);
      if (res.status !== 200) {
        dispatch(globalActionsError(actionType, res.Message));
      } else {
        dispatch(globalActionsSuccess(actionType, res.data));
        dispatch(
          createNotification(
            "success",
            "You have succesfully signed up for avarture"
          )
        );
        dispatch(
          loginUser(
            { username: data.Email, password: data.Password },
            true,
            redirect
          )
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(globalActionsError(actionType, error.Error));
    }
  };
};

export const saveUserData = user => {
  const actionType = "authenticateUserWithGoogle";

  return async dispatch => {
    try {
      dispatch(globalActionsSuccess(actionType, user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserData = () => {
  const actionType = "logout";
  return dispatch => {
    return dispatch(globalActionsSuccess(actionType));
  };
};

export const checkIfUserIsLoggedIn = () => {
  console.log("yes");
  const actionType = "checkLoggedInUser";
  return async dispatch => {
    try {
      const token = sessionStorage.getItem("recruiteeToken");
      if (token) {
        const tokenObject = parseJwt(token);
        const expiryDate = Date.parse(tokenObject.expiryDate);
        if (expiryDate > Date.now()) {
          const userData = {
            Email: tokenObject.username,
            Id: tokenObject.id
          };
          dispatch(getProfile(userData.Id));
        } else {
          sessionStorage.removeItem("recruiteeToken");
        }
      }
    } catch (error) {
      dispatch(globalActionsError(actionType, error.message));
    }
  };
};
export const loginUser = (
  requestObject,
  isNewUser,
  redirect,
  shouldRemember
) => {
  const actionType = "signinUser";
  const { username, password } = requestObject;
  return async dispatch => {
    try {
      dispatch(globalActionsRequested(actionType));

      let { data, status } = await getUserAccessToken(
        `api/avature/UserLogin?username=${username}&password=${password}`
      );
      if (status !== 200) {
        dispatch(globalActionsError(actionType, data.Message));
      } else {
        console.log(data);
        const userData = {
          email: data.userName,
          Id: data.Id,
          lastname: data.LastName,
          firstname: data.FirstName
        };
        sessionStorage.setItem("recruiteeToken", JSON.stringify(data.token));

        if (shouldRemember) {
          localStorage.setItem("recruiteeData", JSON.stringify(data));
        }
        dispatch(globalActionsSuccess(actionType, userData));
        isNewUser && redirect(`/profile/edit/${data.Id}`);
      }
    } catch (error) {
      console.log(error);
      dispatch(globalActionsError(actionType, "failed to login"));
    }
  };
};

export const isLoggedIn = () => {
  const actionType = "signinUser";
  return async dispatch => {
    try {
      const userData = localStorage.getItem("userData");
      if (userData) {
        dispatch(globalActionsSuccess(actionType, userData));
      }
    } catch (error) {
      dispatch(globalActionsError(actionType, error.message));
    }
  };
};
export const updateProfile = (requestObject, id, nextView, option) => {
  const actionType = "updateProfile";
  return async dispatch => {
    try {
      dispatch(globalActionsRequested(actionType));

      const { status, data, error } = await makePutRequest(
        `api/avature/UpdtaeUserProfile?id=${id}`,
        requestObject
      );
      if (status !== 200) {
        dispatch(globalActionsError(actionType, error));
      }
      dispatch(globalActionsSuccess(actionType, { data, nextView }));
      dispatch(displayANewFormView(nextView, option));
    } catch (error) {
      if (error.response) {
        return dispatch(
          globalActionsError(actionType, error.response.data.Message)
        );
      } else if (error.request) {
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};

export const getProfile = id => {
  const actionType = "getProfile";
  return async dispatch => {
    try {
      dispatch(globalActionsRequested(actionType));

      const { status, data, error } = await makeGetRequest(
        `api/avature/ReturnUserProfile`,
        {
          id
        }
      );
      if (status !== 200) {
        dispatch(globalActionsError(actionType, error));
      }
      localStorage.setItem("userData", JSON.stringify(data));
      dispatch(globalActionsSuccess(actionType, data));
    } catch (error) {
      if (error.response) {
        return dispatch(
          globalActionsError(actionType, error.response.data.Message)
        );
      } else if (error.request) {
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};

export const getUserApplications = userId => {
  const actionType = "getUserApplications";
  return async dispatch => {
    try {
      dispatch(globalActionsRequested(actionType));

      const { status, data, error } = await makeGetRequest(
        `ReturnUserApplications?userId=${userId}`
      );
      if (status !== 200) {
        dispatch(globalActionsError(actionType, error));
      }
      dispatch(globalActionsSuccess(actionType, data));
    } catch (error) {
      if (error.response) {
        return dispatch(
          globalActionsError(actionType, error.response.data.Message)
        );
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
      dispatch(globalActionsRequested(actionType));

      const { status, data, error } = await makePostRequest(
        `api/avature/UploadDocuments?id=${id}`,
        requestObject
      );
      if (status !== 200) {
        dispatch(globalActionsError(actionType, error));
      } else {
        dispatch(globalActionsSuccess(actionType, data));
        if (Object.keys(requestObject).includes("cv64")) {
          const cvData = {
            cvBase64: requestObject["cv64"],
            id,
            fileExtension: requestObject.cvextension
          };
          dispatch(globalActionsRequested(actionType));
          const { status, data: requestData } = await parseCv(cvData);
          if (status === 200) {
            const { data } = requestData;
            const userNames = data.FullName ? data.FullName.split(" ") : null;
            const parsedData = {
              EducationalQualifications:
                data.EducationalQualification &&
                data.EducationalQualification.join(","),
              UserEducation: data.UserEducation && data.UserEducation.join(","),
              LastName: userNames && userNames[1],
              FirstName: userNames && userNames[0],
              MiddleName: userNames && userNames[2] && userNames[2],
              ContactNumber: data.ContactNumber,
              FullName: data.FullName
            };
            dispatch(updateProfile(parsedData, id, "basic"));
          }
        }
      }
    } catch (error) {
      if (error.response) {
        return dispatch(
          globalActionsError(actionType, error.response.data.Message)
        );
      } else if (error.request) {
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};
