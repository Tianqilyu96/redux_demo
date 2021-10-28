//引入reduer
import { combineReducers } from "redux";
import count from "./count";
import person from "./person";

//合并reducers, 命名states
export default combineReducers({
  count,
  person,
});
