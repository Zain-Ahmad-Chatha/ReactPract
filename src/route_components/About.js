import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <h1>The About page</h1>
      &nbsp;
      <button onClick={() => navigate("/contact")}>Go To Contact</button>
    </React.Fragment>
  );
};

export default About;
