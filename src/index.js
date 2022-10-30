import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './employe';
import Props from './props';
import Clock from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Main />
    <Props name="ramesh" id ={102010} />
    <Clock />
  </React.StrictMode>
);
reportWebVitals();
