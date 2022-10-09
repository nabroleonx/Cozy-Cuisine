import { combineReducers } from "redux";
import errors from "./errors";
import posts from "./posts";
import auth from "./auth";

export default combineReducers({
  auth,
  errors,
  posts,
});
