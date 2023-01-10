import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="header">
        <h1>LOGO</h1>
        <ul>
          <li>
            <NavLink to={"/"}> Home </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/product"}>Products</NavLink>
          </li>
        </ul>
      </nav>
      <hr></hr>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <hr></hr>
      <Outlet />
    </header>
  );
};

export default Navbar;
