import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Adding notes
// This is the root of the application
// And here we have wrapped the entir application in the router-dom using <BrowserRouter>
 