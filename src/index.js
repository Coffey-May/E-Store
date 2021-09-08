import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// const App = lazy(() => import("./App"))

ReactDOM.render(
  // <Suspense fallback={'loading...'}>
  // <React.StrictMode>

  < App />

  // </React.StrictMode >
  // </Suspense>
  ,
  document.getElementById('root')
);

