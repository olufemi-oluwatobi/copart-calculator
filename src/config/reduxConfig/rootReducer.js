import { combineReducers } from "redux";
import global from "../authConfig/globalReducer";
import profile from "../../features/profile/reduxFunctions/reducer";
import home from "../../features/home/reduxFunctions/reducer";
import job from "../../features/job/reduxFunctions/reducer";
import dashboard from "../../features/dashboard/reduxFunctions/reducer";

export default combineReducers({
  global,
  profile,
  home,
  job,
  dashboard
});
