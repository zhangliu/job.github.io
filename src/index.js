import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
import router from './router';

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById('root')
);
