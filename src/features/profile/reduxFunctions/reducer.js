import PROFILE_ACTIONS from "./constants";
import update from "immutability-helper";

const initialState = {
  loading: false,
  success: false,
  documents: {},
  error: null,
  workInformation: []
};

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

const populateWorkInfoArray = (state, { payload }) =>
  update(state, {
    workInformation: {
      $set: payload
    }
  });

const handleError = (state, payload) =>
  update(state, {
    error: {
      $set: payload
    },
    loading: {
      $set: false
    }
  });

const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_ACTIONS.uploadDocumentRequested:
      return isRequesting(state);
    case PROFILE_ACTIONS.uploadDocumentSuccess:
      return populateDocumentObject(state, action);
    case PROFILE_ACTIONS.getWorkInformationSuccess:
      return populateWorkInfoArray(state, action);
    case PROFILE_ACTIONS.modifyWorkInformationSuccess:
      return populateWorkInfoArray(state, action);
    case PROFILE_ACTIONS.handleError:
      return handleError(state, action);
    default:
      return state;
  }
};

export default profile;
