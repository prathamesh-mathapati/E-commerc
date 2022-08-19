import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./Context/Product";
import { LogincontextProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <LogincontextProvider>
    <ProductProvider>
    <App />
  </ProductProvider>
  </LogincontextProvider>
  </BrowserRouter>
,
  document.getElementById("root")
);
