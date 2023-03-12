import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import RoutesConfig from "./Routes/RoutesConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RoutesConfig />
  </BrowserRouter>
);
