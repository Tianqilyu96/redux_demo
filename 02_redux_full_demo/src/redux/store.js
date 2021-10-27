//该文件专门用于暴露store对象，整个app只有一个Store obj
//引入创建Store方法
import { createStore } from "redux";
//引入reduer
import countReducer from "./count_reducer"

// create Store Object
export default createStore(countReducer)