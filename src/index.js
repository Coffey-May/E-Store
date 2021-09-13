import React from 'react';
import ReactDOM from 'react-dom';
import loadable from "@loadable/component"

// import App from './App';
const App = loadable(() => import("./App"))


ReactDOM.render(

  // <React.StrictMode>

  < App />

  //  </React.StrictMode > 

  ,
  document.getElementById('root')
);

