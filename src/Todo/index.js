import React, { useState } from "react"
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";
import App2 from "./SignupLogin/components/App2";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <App2 />
    <App />
    </div>
  </React.StrictMode>
  
);

