import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./routeComponents/Home";
// import About from "./routeComponents/About";
// import Contact from "./routeComponents/Contact";
import { About, Contact, Home } from "./routeComponents";
import Navbar from "./routeComponents/Navbar";
import "./RoutingApp.css";
const RoutingApp = () => {
  return (
    <div>
      <Routes>
        {false && (
          <React.Fragment>
            <Route path={"/"} element={<div> The home page </div>} />
            <Route path={"/contact"} element={<div> The contact page </div>} />
            <Route path={"/about"} element={<div> The about page </div>} />
            <Route path={"*"} element={<div>Page not Found </div>} />
          </React.Fragment>
        )}

        {true && (
          <React.Fragment>
            <Route path={"/"} element={<Navbar />}>
              <Route path={"/"} element={<Home />} />
              <Route path={"contact"} element={<Contact />} />
              <Route path={"about"} element={<About />} />
              <Route path={"*"} element={<div>Page not Found </div>} />
            </Route>
          </React.Fragment>
        )}
      </Routes>
    </div>
  );
};

export default RoutingApp;
