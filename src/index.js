import React from "react";
import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
// import Inputs from "./dynamicPractice/Inputs";
import CustomRoutes from "./CustomRoutes";
import { BrowserRouter } from "react-router-dom";
// import { MultiSelect } from "./multiSelect";
import "./index.css";
// import ProductsContext from "./freshCart/context/productContext";
import { ProductsProvider, AuthProvider } from "./freshCart/context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>{<CustomRoutes />}</ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
    {
      // <Inputs></Inputs>
    }
    {
      // <MultiSelect />
    }
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
