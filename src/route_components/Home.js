import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onContact = () => {
    navigate("/contact");
  };
  return (
    <React.Fragment>
      {
        // this is called shared outlet routes, using nested routes.
        // it says that your parent route should contain outlet
      }
      <h1>Home Page </h1>
    </React.Fragment>
  );
};

export default Home;

// <button onClick={onContact}>Go To Contact</button>
// &nbsp;
// <button onClick={() => navigate("/about")}>Go To About</button>
