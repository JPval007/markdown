import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//This is the default bootstrap library
import 'bootstrap/dist/css/bootstrap.css';
//This is your modified boostrap version
// import './custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

