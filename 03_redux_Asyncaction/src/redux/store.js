//该文件专门用于暴露store对象，整个app只有一个Store obj
//引入创建Store方法
import { createStore,applyMiddleware } from "redux";
//引入reduer
import countReducer from "./count_reducer"
//引入thunk中间件
import thunk from "redux-thunk"

// create Store Object
export default createStore(countReducer,applyMiddleware(thunk))