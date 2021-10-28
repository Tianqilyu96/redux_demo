//该文件专门用于暴露store对象，整个app只有一个Store obj
//引入创建Store方法
import { createStore, applyMiddleware } from "redux";

//引入thunk中间件 让redux识别function action 异步action需要
import thunk from "redux-thunk";
//引入devtool extention
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

// create Store Object,bind reducers
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
