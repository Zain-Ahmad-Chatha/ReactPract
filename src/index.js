import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';  //before this was using instead of Counter
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
import Counters from "./components/counters"; //before app this was using.

import AgainCounter from "./again/again";
import Inputs from "./dynamicPractice/Inputs";
import App from "./App";
import RoutingApp from "./RoutingApp";
import { BrowserRouter } from "react-router-dom";
import { MultiSelect } from "./multiSelect";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {
        // <RoutingApp />
      }
    </BrowserRouter>
    ,{/* <App/> */}
    {/* <App/> */} {/* this is old pracice */}
    {/* do again same practice. */}
    {/* <AgainCounter /> */}
    {
      // <Inputs></Inputs>
    }
    <MultiSelect />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
