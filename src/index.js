import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter basename='/-beta-site-new'>
    //  <BrowserRouter basename='/'>
    <BrowserRouter basename='/'>
      <LightgalleryProvider>
        <App />
      </LightgalleryProvider> 
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
