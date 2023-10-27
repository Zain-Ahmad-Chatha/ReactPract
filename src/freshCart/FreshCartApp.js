import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components";

const FreshCartApp = () => {
  return (
    <div style={{ maxWidth: "1200px", marginTop: "30px" }}>
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default FreshCartApp;

// <Routes>
//         <Route path="freshCart">
//           <Route path="login" element={<Login />} />
//           <Route path="cart" element={<Cart />} />
//         </Route>
//       </Routes>

// Ring Dialer, SIP Extensions , VoiceMails,
// Settings => Shifts, Teams, Canned Messages, Canned Emails

// form builder is difficult
// backups a little bit
