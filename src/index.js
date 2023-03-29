import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import Inputs from "./dynamicPractice/Inputs";
import CustomRoutes from "./CustomRoutes";
import { BrowserRouter } from "react-router-dom";
// import { MultiSelect } from "./multiSelect";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>{<CustomRoutes />}</BrowserRouter>
    {
      // <Inputs></Inputs>
    }
    {
      // <MultiSelect />
    }
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
