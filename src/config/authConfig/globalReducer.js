import update from "immutability-helper";
import GLOBAL_CONSTANTS from "./globalConstants";

const initialState = {
  isFetching: false,
  isLoading: false,
  loading: false,
  success: null,
  error: null,
  userData: {},
  nextView: null,
  documents: {},
  userApplications: []
};

const requestingHome = state =>
  update(state, {
    $merge: {
      isLoading: true
    }
  });
const displayANewFormView = (state, { payload }) =>
  update(state, {
    nextView: {
      $set: payload
    }
  });
const requesting = state =>
  update(state, {
    $merge: {
      isLoading: true
    }
  });

const isRequesting = state =>
  update(state, {
    loading: {
      $set: true
    }
  });

const populateDocumentObject = (state, { payload }) =>
  update(state, {
    documents: {
      $merge: payload
    },
    loading: {
      $set: false
    },
    success: {
      $set: "upload was succesful"
    }
  });
const implementNonDeepMerge = (state, data, key) =>
  update(state, {
    [key]: {
      $set: data
    }
  });
const handleError = (state, { error }) => {
  return update(state, {
    isLoading: {
      $set: false
    },
    error: {
      $set: error
    }
  });
};
const clearError = state => {
  return update(state, {
    error: {
      $set: null
    }
  });
};
const loginUser = (state, { payload }) =>
  update(state, {
    userData: {
      $set: payload
    },
    isLoading: {
      $set: false
    }
  });

const userApplications = (state, { payload }) =>
  update(state, {
    userApplications: {
      $set: payload
    }
  });

const populateUserProfile = (state, { payload }) => {
  const { data } = payload;
  return update(state, {
    userData: {
      $set: data
    },
    isLoading: {
      $set: false
    }
  });
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_CONSTANTS.signinUserRequested:
      return requesting(state);
    case GLOBAL_CONSTANTS.signinUserSuccess:
      return loginUser(state, action);
    case GLOBAL_CONSTANTS.signupUserError:
      return handleError(state, action);
    case GLOBAL_CONSTANTS.signupUserRequested:
      return requesting(state, action);
    case GLOBAL_CONSTANTS.signupUserSuccess:
      return implementNonDeepMerge(state, false, "loading");
    case GLOBAL_CONSTANTS.signinUserSuccess:
      return implementNonDeepMerge(state, false, "isLoading");
    case GLOBAL_CONSTANTS.clearErrorMessageSuccess:
      return clearError(state, action);
    case GLOBAL_CONSTANTS.clearSuccessMessageSuccess:
      return implementNonDeepMerge(state, null, "success");
    case GLOBAL_CONSTANTS.authenticateUserWithGoogleSuccess:
      return implementNonDeepMerge(state, action.payload, "userData");
    case GLOBAL_CONSTANTS.logoutSuccess:
      return implementNonDeepMerge(state, null, "userData");
    case GLOBAL_CONSTANTS.createNotificationSuccess:
      return implementNonDeepMerge(
        state,
        action.payload.message,
        action.payload.type
      );
    case GLOBAL_CONSTANTS.updateProfileSuccess:
      return populateUserProfile(state, action);
    case GLOBAL_CONSTANTS.updateProfileRequested:
      return requesting(state, action);
    case GLOBAL_CONSTANTS.updateProfileError:
      return handleError(state, "Failed to update profile");
    case GLOBAL_CONSTANTS.getProfileSuccess:
      return implementNonDeepMerge(state, action.payload, "userData");
    case GLOBAL_CONSTANTS.uploadDocumentRequested:
      return isRequesting(state);
    case GLOBAL_CONSTANTS.uploadDocumentSuccess:
      return populateDocumentObject(state, action);
    case GLOBAL_CONSTANTS.handleError:
      return handleError(state, action);
    case GLOBAL_CONSTANTS.checkLoggedInUserSuccess:
      return implementNonDeepMerge(state, action.payload, "userData");
    case GLOBAL_CONSTANTS.displayANewFormViewSuccess:
      return displayANewFormView(state, action);
    case GLOBAL_CONSTANTS.getUserApplicationsSuccess:
      return userApplications(state, action);
    default:
      return state;
  }
};
export default global;
