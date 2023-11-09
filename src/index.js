import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Avobe the bootstrap import you can override variables
import 'bootstrap/dist/css/bootstrap.css';
// Import bootstrap here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

