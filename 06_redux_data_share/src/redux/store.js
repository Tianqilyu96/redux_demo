//该文件专门用于暴露store对象，整个app只有一个Store obj
//引入创建Store方法
import { createStore, applyMiddleware, combineReducers } from "redux";
//引入reduer
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
//引入thunk中间件 让redux识别function action
import thunk from "redux-thunk";

//合并reducers
const allReducer = combineReducers({count:countReducer,person:personReducer})
// create Store Object
export default createStore(allReducer, applyMiddleware(thunk));
