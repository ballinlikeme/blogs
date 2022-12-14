import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import {createGlobalStyle} from "styled-components";
import {BrowserRouter} from "react-router-dom";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
  </React.StrictMode>
);