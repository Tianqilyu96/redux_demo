import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
//provider会自动传store给container组件，不需要写很多遍 store={store}
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//react-redux不需要这段，他会自动检测
//subscribe写在最外边，每次更新都会render
// store.subscribe(()=>{ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );})
