import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//subscribe写在最外边，每次更新都会render
store.subscribe(()=>{ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);})




