import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  uploadDocument,
  getWorkInformation,
  updateWorkInformation
} from "../reduxFunctions/actions";
import EditView from "../views/edit";

const mapStateToProps = ({ profile }) => ({
  loading: profile.loading,
  success: profile.success,
  error: profile.error,
  documents: profile.documents,
  workInformation: profile.workInformation
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      uploadDocument,
      getWorkInformation,
      updateWorkInformation
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditView);
