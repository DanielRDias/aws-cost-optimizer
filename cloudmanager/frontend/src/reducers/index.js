import { combineReducers } from "redux";
import awsaccounts from "./awsaccounts";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  awsaccounts,
  errors,
  messages,
});
