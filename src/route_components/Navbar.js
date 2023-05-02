import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";

const navlinks = [
  { to: "", name: "Home" },
  { to: "contact", name: "Contact" },
  { to: "about", name: "About" },
  { to: "product", name: "Products" },
  { to: "checkBox", name: "Check Box" },
  { to: "redux", name: "Redux || Toolkit" },
  { to: "counters", name: "Counter App" },
  { to: "notes", name: "Notes Todo" },
  { to: "todoList", name: "Todo List" },
  { to: "freshCart", name: "Fresh Cart " },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="header">
        <h1>LOGO</h1>
        <ul>
          {!!navlinks &&
            navlinks.length > 0 &&
            navlinks.map((route, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/${route.to}`}> {route.name} </NavLink>
                </li>
              );
            })}
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
