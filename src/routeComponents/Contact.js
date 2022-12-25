import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>The Contact page</h1>
      <button onClick={() => navigate("/")}>Go To Home</button>
      &nbsp;
    </React.Fragment>
  );
};

export default Contact;
