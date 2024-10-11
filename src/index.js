import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/scss/styles.scss";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
